import { Request } from './Request.js';
import showLoginPage from './showLoginPage.js';
import showStartPage from './showStartPage.js';

$(document).ready(function () {
    if(window.localStorage){
        Request.get("/index.php")
        .then(function(resp){
            const response = resp['data'];
            console.log(response);
            //console.log(location.pathname);
            
            if(response['status'] == "401" && location.pathname == '/SA&D_test/client/pages/report/form.html'){
                window.location = "../samples/login.html?#"
                //showLoginPage();
            }
            else if (response['status'] == "200"){
                showStartPage();
                //更新token
                const jwtToken = response['jwt'];
                let str='';
                if(window.localStorage){
                    window.localStorage.setItem("jwtToken",jwtToken);
                    //console.log(location.pathname)   //      /sql-SA_D/client/form/form.html
                    $("#profile-name").html(response['userinfo']['EmpName']);

                    str = response['userinfo']['DeptName']+
                    '&nbsp'+response['userinfo']['JobTitle']+
                    '&nbsp'+response['userinfo']['EmpId'];
                    
                    $("#designation").html(str);
                    $("#dropdown-item-name").html(response['userinfo']['EmpName']);
                    $("#Sign-statu").html('登出');
                    
                }
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
    $("#Sign-statu").click(function(){
        // console.log('Sign btn clicked!')
        // console.log($("#Sign-statu").text())
        if ($("#Sign-statu").text() == '登出'){
            window.localStorage.clear()
            location.reload();
        }
        else if ($("#Sign-statu").text() == '登入'){
            window.location = "./pages/samples/login.html?#"
        }
    });
});
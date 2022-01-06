import { Request } from './Request.js';

showLoginPage()
export default function showLoginPage(){
    const str =`
        帳號：<input type="text" id="id"><br>
        密碼：<input type="text" id="password"><br>
        <button id="login">登入</button>
        <div id='errormessage' style="color:red"></div>
    `;
    // $("#root").html(str);

    $("#login").click(function(e){
        const data={
            "id":$("#id").val(),
            "password":$("#password").val(),
        };
        Request.post('/index.php?action=DoLogin', Qs.stringify(data))
        .then(function(resp){
            const response = resp['data'];
            const jwtToken = response['jwt'];

            if(response['status']==200){//儲存到session storage
                window.localStorage.setItem("jwtToken",jwtToken);
                window.location = "../../index.html"
                // location.reload();
            }
            
            else{
                const str =`
                            <div>`+response['message']+`</div>
                        `;
                $("#msgbox").html(str);
            }
        })
        .catch(function(err){
            //console.log(err);
        });
    }); 
}


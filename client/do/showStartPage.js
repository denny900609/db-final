import { doSelect } from './Select.js';
import { Request } from './Request.js';

export default function showStartPage() {
    const str = `
    
        <div id="content"></div>
    `;
    $("#root").html(str);

    //判斷URL

    var url = new URL(location.href);
    
    if(url.searchParams.get('choose')=='product'){
        doSelect("product");
    }
    else if(url.searchParams.get('choose')=='order'){
        Request.get("/index.php")
        .then(function(resp){
            const response = resp['data'];
            doSelect("order", response['userinfo']['EmpId']);
        })
        
    }
    else if(url.searchParams.get('choose')=='sale'){
        
        //標題
        let str = ``;
        str += `<div class="row align-items-center">`;
        str += `<div class="col-md-2">`;
        str += `<p class="card-title mb-0">銷售報表</p>`;
        str += `</div>`;
        str += `<div class="col-md-10">`;
        str += `<input id="dateselect1" type="date" name="bday" value="2016-01-01">`;
        str += `   ~   `;
        str += `<input id="dateselect2" type="date" name="bday" value="2018-12-31">`;
        str += `<button id="dateselectclick" style="background-color: #32a367;color: #FFFFFF;">查詢</button>`;
        str += `</div>`;
        str += `</div>`;
        str += `<div class="row align-items-center">`;
        str += `<div class="col-md-12">`;
        str += `<div id="content2"></div>`;
        str += `</div>`;
        str += `</div>`;
        str += `</div>`;        
        //標題

        $("#content").html(str);
        $("#dateselectclick").click(function () {
            doSelect("sale",$("#dateselect1").val(), $("#dateselect2").val());
        });
    }

    //判斷URL

    


    //登出
    $("#logout").click(function () {
        window.localStorage.clear()
        location.reload();
    });

    
}
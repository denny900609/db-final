import { showUpdatePage } from './Updateshow.js';
import { doDelete } from './Delete.js';
import { showInsertPage } from './Insertshow.js';
import { Request } from "./Request.js";
function doSelect(choose, data1 = null, data2 = null, data3 = null) {
    let url = ''
    if (choose == 'sale') {
        url = './index.php?action=DoSelectAction&choose=' + choose + '&date1=' + data1 + '&date2=' + data2
    }
    else if (choose == 'order') {
        if (data2 == null, data3 == null) {

            url = './index.php?action=DoSelectAction&choose=' + choose + '&EmpId=' + data1
            
        }
        else {
            url = './index.php?action=DoSelectAction&choose=' + choose + '&EmpId=' + data1 + '&choicetype=' + data2 + '&keyword=' + data3
        }
    }
    else if (choose == 'detail') {
        url = './index.php?action=DoSelectAction&choose=' + choose + '&OrderId=' + data1
    }
    else if (choose == 'product') {
        if (data1 == null, data2 == null) {

            url = './index.php?action=DoSelectAction&choose=' + choose
        }
        else {
            url = './index.php?action=DoSelectAction&choose=' + choose + '&choicetype=' + data1 + '&keyword=' + data2

        }
    }
    else {
        url = './index.php?action=DoSelectAction&choose=' + choose
    }
    
    Request.get(url)
        .then(function (resp) {
            let response = resp['data'];
            switch (response['status']) {
                case 200:
                    //1988-07-22
                    //更新token
                    const jwtToken = response['jwt'];
                    if (window.localStorage) {//儲存到session storage
                        window.localStorage.setItem("jwtToken", jwtToken);
                        // console.log('refresh');
                    }

                    if (choose == 'product') {
                        let rows = response['result'];
                        

                        let str = ``;

                        //標題
                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">產品基本資料</p>`;
                        str += `</div>`;
                        str += `<div class="col-md-2">`;
                        str += `<button id="insert" type="button" class="btn btn-primary">新增資料</button>`;
                        str += `</div>`;

                        //選擇類別
                        str += `<div class="col-md-2">`;
                        str += `<div class="btn-group">`;
                        str += `<button id="choicetype" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">編號</button>`;
                        str += `<div class="dropdown-menu">`;
                        str += `<button id="ProdID" name="choicetype" class="dropdown-item">編號</button>`;
                        str += `<button id="ProdName" name="choicetype" class="dropdown-item">名稱</button>`;
                        str += `<button id="UnitPrice" name="choicetype" class="dropdown-item">單價</button>`;
                        str += `<button id="Cost" name="choicetype" class="dropdown-item">成本</button>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `</div>`;
                        //選擇類別

                        //搜尋欄
                        str += `<div class="col-md-4">`;
                        str += `<div class="input-group">`;
                        str += `<div class="input-group-prepend hover-cursor" id="navbar-search-icon">`;
                        str += `<span class="input-group-text" id="search">`;
                        str += `<i id="s1" class="icon-search"></i>`;
                        str += `</span>`;
                        str += `</div>`;
                        str += `<input type="text" class="form-control" id="s2" placeholder="輸入關鍵字" aria-label="search" aria-describedby="search">`;
                        str += `</div>`;
                        str += `</div>`;
                        //搜尋欄

                        str += `</div>`;
                        str += `<br>`;
                        //標題

                        //表格
                        str += `<div class="table-responsive">`;
                        str += `<table class="table table-striped table-borderless ">`;
                        str += `<thead>`;
                        str += `<tr class="headerrow">`;
                        str += `<td>編號</td>`;
                        str += `<td>名稱</td>`;
                        str += `<td>單價</td>`;
                        str += `<td>成本</td>`;
                        str += `<td>修改</td>`;
                        str += `<td>刪除</td>`;
                        str += `</tr>`;
                        str += `</thead>`;
                        str += `<tbody>`;
                        rows.forEach(element => {
                            str += `<tr class="dataroweven">`;
                            str += `<td>` + element['ProdID'] + `</td>`;
                            str += `<td>` + element['ProdName'] + `</td>`;
                            str += `<td>` + element['UnitPrice'] + `</td>`;
                            str += `<td>` + element['Cost'] + `</td>`;
                            str += `<td><button class="btn btn-info" id=` + element['ProdID'] + ` name="update">修改</button></td>`;
                            str += `<td><button class="btn btn-info" id=` + element['ProdID'] + ` name="delete">刪除</button></td>`;
                            str += `</tr>`;
                        });
                        str += `</tbody>`;
                        str += `</table>`;
                        str += `</div>`;
                        //表格

                        $("#content").html(str);
                    }
                    else if (choose == 'sale') {
                        let rows = response['result'];

                        //表格
                        let str = ``;
                        str += `<br>`;
                        str += `<div class="table-responsive">`;
                        str += `<table class="table table-striped table-borderless">`;
                        str += `<thead>`;
                        str += `<tr class="headerrow">`;
                        str += `<td>客戶名稱</td>`;
                        str += `<td>客戶代號</td>`;
                        str += `<td>訂單總銷售金額</td>`;
                        str += `<td>訂單總利潤</td>`;
                        str += `</tr>`;
                        str += `</thead>`;
                        str += `<tbody>`;
                        rows.forEach(element => {
                            str += `<tr class="dataroweven">`;
                            str += `<td>` + element['客戶名稱'] + `</td>`;
                            str += `<td>` + element['客戶代號'] + `</td>`;
                            str += `<td>` + element['訂單總銷售金額'] + `</td>`;
                            str += `<td>` + element['訂單總利潤'] + `</td>`;
                            str += `</tr>`;
                        });
                        str += `</tbody>`;
                        str += `</table>`;
                        str += `</div>`;
                        //表格

                        $("#content2").html(str);
                    }


                    else if (choose == 'order') {
                        let rows = response['result'];
                        let str = ``;

                        //標題
                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">訂單交易維護</p>`;
                        str += `</div>`;
                        str += `<div class="col-md-2">`;
                        str += `<button id="insert" type="button" class="btn btn-primary">新增訂單</button>`;
                        str += `</div>`;


                        //選擇類別
                        str += `<div class="col-md-2">`;
                        str += `<div class="btn-group">`;
                        str += `<button id="choicetype" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown">序號</button>`;
                        str += `<div class="dropdown-menu">`;
                        str += `<button id="seq" name="choicetype" class="dropdown-item">序號</button>`;
                        str += `<button id="OrderId" name="choicetype" class="dropdown-item">訂單編號</button>`;
                        str += `<button id="CustId" name="choicetype" class="dropdown-item">客戶代號</button>`;
                        str += `<button id="OrderDate" name="choicetype" class="dropdown-item">訂單日期</button>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `</div>`;
                        //選擇類別

                        //搜尋欄
                        str += `<div class="col-md-4">`;
                        str += `<div class="input-group">`;
                        str += `<div class="input-group-prepend hover-cursor" id="navbar-search-icon">`;
                        str += `<span class="input-group-text" id="search">`;
                        str += `<i id="s1" class="icon-search"></i>`;
                        str += `</span>`;
                        str += `</div>`;
                        str += `<input type="text" class="form-control" id="s2" placeholder="輸入關鍵字" aria-label="search" aria-describedby="search">`;
                        str += `</div>`;
                        str += `</div>`;
                        //搜尋欄

                        str += `</div>`;
                        str += `<br>`;

                        //標題

                        //表格
                        str += `<div class="table-responsive">`;
                        str += `<table class="table table-striped table-borderless align-items-center">`;
                        str += `<thead>`;
                        str += `<tr class="headerrow">`;
                        str += `<td>序號</td>`;
                        str += `<td>訂單編號</td>`;
                        str += `<td>員工代號</td>`;
                        str += `<td>客戶代號</td>`;
                        str += `<td>訂單日期</td>`;
                        str += `<td>備註</td>`;
                        str += `<td>修改</td>`;
                        str += `<td>刪除</td>`;
                        str += `<td>詳細訂單</td>`;
                        str += `</tr>`;
                        str += `</thead>`;
                        str += `<tbody>`;
                        rows.forEach(element => {
                            str += `<tr class="dataroweven">`;
                            str += `<td>` + element['seq'] + `</td>`;
                            str += `<td>` + element['OrderId'] + `</td>`;
                            str += `<td>` + element['EmpId'] + `</td>`;
                            str += `<td>` + element['CustId'] + `</td>`;
                            str += `<td>` + element['OrderDate'] + `</td>`;
                            str += `<td>` + element['Descript'] + `</td>`;
                            str += `<td><button class="btn btn-info" id=` + element['seq'] + ` name="update">修改</button></td>`;
                            str += `<td><button class="btn btn-info" id=` + element['seq'] + ` name="delete">刪除</button></td>`;
                            str += `<td><button class="btn btn-info" id=` + element['OrderId'] + ` name="detailselect">詳細訂單</button></td>`;
                            str += `</tr>`;
                        });
                        str += `</tbody>`;
                        str += `</table>`;
                        str += `</div>`;
                        //表格

                        $("#content").html(str);
                    }
                    else if (choose == 'detail') {
                        let rows = response['result'];
                        let str = ``;

                        //標題
                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">訂單詳細資料</p>`;
                        str += `</div>`;
                        str += `<div class="col-md-10 ">`;
                        str += `<button id="insert" type="button" class="btn btn-primary">新增資料</button>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `<br>`;
                        //標題

                        //表格
                        str += `<div class="table-responsive">`;
                        str += `<table class="table table-striped table-borderless ">`;
                        str += `<thead>`;
                        str += `<tr class="headerrow">`;
                        str += `<td>序號</td>`;
                        str += `<td>訂單編號</td>`;
                        str += `<td>產品代號</td>`;
                        str += `<td>數量</td>`;
                        str += `<td>折扣</td>`;
                        str += `<td>修改</td>`;
                        str += `<td>刪除</td>`;
                        str += `</tr>`;
                        str += `</thead>`;
                        str += `<tbody>`;
                        rows.forEach(element => {
                            str += `<tr class="dataroweven">`;
                            str += `<td>` + element['seq'] + `</td>`;
                            str += `<td>` + element['OrderId'] + `</td>`;
                            str += `<td>` + element['ProdId'] + `</td>`;
                            str += `<td>` + element['Qty'] + `</td>`;
                            str += `<td>` + element['Discount'] + `</td>`;
                            str += `<td><button class="btn btn-info" id=` + element['seq'] + ` name="update">修改</button></td>`;
                            str += `<td><button class="btn btn-info" id=` + element['seq'] + ` name="delete">刪除</button></td>`;
                            str += `</tr>`;
                        });
                        str += `</tbody>`;
                        str += `</table>`;
                        str += `</div>`;
                        //表格

                        $("#content").html(str);
                    }

                    //訂單詳細資料
                    $("button[name=detailselect]").click(function () {

                        let id = $(this).attr("id");
                        let choose = "detail";
                        doSelect(choose, id)

                    });
                    //訂單詳細資料


                    $("button[name=update]").click(function () {
                        let id = $(this).attr("id");
                        showUpdatePage(id, choose);                        
                    });

                    $("button[name=delete]").click(function () {
                        let id = $(this).attr("id");
                        doDelete(id,choose);
                        
                    });

                    $("#insert").click(function () {
                        if (choose == 'order') {
                            showInsertPage(choose, data1);
                        }
                        else if (choose == 'detail') {
                            showInsertPage(choose, data1);
                        }
                        else {
                            showInsertPage(choose);
                        }
                    });

                    //選擇類別
                    $("button[name=choicetype]").click(function () {

                        let id = $(this).attr("id");

                        //產品
                        if (id == "ProdID") {
                            $("#choicetype").text("編號");
                        }
                        else if (id == "ProdName") {
                            $("#choicetype").text("名稱");
                        }
                        else if (id == "UnitPrice") {
                            $("#choicetype").text("單價");
                        }
                        else if (id == "Cost") {
                            $("#choicetype").text("成本");
                        }
                        //產品

                        //訂單
                        else if (id == "seq") {
                            $("#choicetype").text("序號");
                        }
                        else if (id == "OrderId") {
                            $("#choicetype").text("訂單編號");
                        }
                        else if (id == "CustId") {
                            $("#choicetype").text("客戶代號");
                        }
                        else if (id == "OrderDate") {
                            $("#choicetype").text("訂單日期");
                        }
                        //訂單

                    })
                    //選擇類別


                    //個別查詢
                    $("#s1").click(function () {

                        let choicetype = ``;
                        let keyword = $(s2).val();

                        //產品
                        if (choose == 'product') {

                            if ($("#choicetype").text() == "編號") {
                                choicetype += "ProdID";
                            }
                            else if ($("#choicetype").text() == "名稱") {
                                choicetype += "ProdName";
                            }
                            else if ($("#choicetype").text() == "單價") {
                                choicetype += "UnitPrice";
                            }
                            else {
                                choicetype += "Cost";
                            }

                            doSelect(choose, choicetype, keyword);
                        }
                        //產品

                        //訂單
                        if (choose == 'order') {

                            let empid = data1;

                            if ($("#choicetype").text() == "序號") {
                                choicetype += "seq";
                            }
                            else if ($("#choicetype").text() == "訂單編號") {
                                choicetype += "OrderId";
                            }
                            else if ($("#choicetype").text() == "客戶代號") {
                                choicetype += "CustId";
                            }
                            else {
                                choicetype += "OrderDate";
                            }

                            doSelect(choose, empid ,choicetype, keyword);                            
                        }
                        //訂單

                    })


                    break;
                case 401:
                    //alert('Token逾時');
                    location.reload();
                    break;
                case 400:
                    break;
                case 202:
                    $("#content").html('202 : 權限不足');
                    break;
                default:
                    break;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
export { doSelect };


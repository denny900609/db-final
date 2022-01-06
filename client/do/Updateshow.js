import { doUpdate } from './Update.js';
import {Request} from"./Request.js";
import { doSelect } from './Select.js';
function showUpdatePage(id,choose) {
    let data={
        "id": id,
        "orderid": id,
        "proid": id,
        "seq": id,
        
    };
    console.log(data);
    Request.post('./index.php?action=DoSelectAction&choose=' + choose , Qs.stringify(data) )
    .then(function(resp){
        let response = resp['data'];
            switch (response['status']) {
                case 200:
                    let rows = response['result'];
                    let row = rows[0];
                    let str='';
                    if(choose == 'product'){
                    
                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">修改產品資料</p>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<div>`;
                        str += `<label>產品編號：</label>`;
                        str += `<input type="text" class="form-control" id="ProdID" value="` + row["ProdID"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>產品名稱：</label>`;
                        str += `<input type="text" class="form-control" id="ProdName" value="` + row["ProdName"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>產品單價：</label>`;
                        str += `<input type="text" class="form-control" id="UnitPrice" value="` + row["UnitPrice"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>產品成本：</label>`;
                        str += `<input type="text" class="form-control" id="Cost" value="` + row["Cost"] + `"`;
                        str += `</div>`;
                        str += `<br>`;   
                        str += `<button id="doUpdate" class="btn btn-primary mr-2" >更新</button>`;
                        str += `</div>`;

                    }
                    else if(choose == "member"){

                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">修改員工資料</p>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<div>`;
                        str += `<label>員工編號：</label>`;
                        str += `<input type="text" class="form-control" id="id" value="` + row["id"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>員工名稱：</label>`;
                        str += `<input type="text" class="form-control" id="name" value="` + row["name"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>地址：</label>`;
                        str += `<input type="text" class="form-control" id="address" value="` + row["address"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>生日：</label>`;
                        str += `<input type="text" class="form-control" id="birth" value="` + row["birth"] + `"`;
                        str += `</div>`;
                        str += `<br>`;   
                        str += `<button id="doUpdate" class="btn btn-primary mr-2" >更新</button>`;
                        str += `</div>`;

                    }
                    else if(choose == "sale"){

                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">修改銷售資料</p>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<div>`;
                        str += `<label>訂單編號：</label>`;
                        str += `<input type="text" class="form-control" id="orderid" value="` + row["orderid"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>員工名稱：</label>`;
                        str += `<input type="text" class="form-control" id="id" value="` + row["id"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>日期：</label>`;
                        str += `<input type="text" class="form-control" id="date" value="` + row["date"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<button id="doUpdate" class="btn btn-primary mr-2" >更新</button>`;
                        str += `</div>`;
                    }
                    else if(choose == "order"){

                        
                        str += `<div class="row align-items-center">`;
                        str += `<div class="col-md-2">`;
                        str += `<p class="card-title mb-0">修改訂單資料</p>`;
                        str += `</div>`;
                        str += `<div class="col-md-2 ">`;                        
                        str += `<button id="detailselect" type="button" class="btn btn-info">詳細資料</button>`;
                        str += `</div>`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<div>`;
                        str += `<label>訂單序號：</label>`;
                        str += `<input type="text" class="form-control" id="seq" readonly="readonly" value=" ` + row["seq"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>訂單編號：</label>`;
                        str += `<input type="text" class="form-control" id="OrderId" value="` + row["OrderId"] + `"`;                        
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>員工代號：</label>`;
                        str += `<input type="text" class="form-control" id="EmpId" readonly="readonly" value="` + row["EmpId"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>客戶代號：</label>`;
                        str += `<input type="text" class="form-control" id="CustId" value="` + row["CustId"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>訂單日期：</label>`;
                        str += `<input type="text" class="form-control" id="OrderDate" value="` + row["OrderDate"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>訂單備註：</label>`;
                        str += `<input type="text" class="form-control" id="Descript" value="` + row["Descript"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<button id="doUpdate" class="btn btn-primary mr-2" >更新</button>`;
                        str += `</div>`;

                    }
                    else if(choose == "detail"){

                        str += `<h4 class="card-title">修改訂單詳細資料</h4>`;
                        str += `<div>`;
                        str += `<div>`;
                        str += `<label>詳細序號：</label>`;
                        str += `<input type="text" class="form-control" id="seq" readonly="readonly" value=" ` + row["seq"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>訂單編號：</label>`;
                        str += `<input type="text" class="form-control" id="OrderId" value="` + row["OrderId"] + `"`;                        
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>產品代號：</label>`;
                        str += `<input type="text" class="form-control" id="ProdId" value="` + row["ProdId"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>產品數量：</label>`;
                        str += `<input type="text" class="form-control" id="Qty" value="` + row["Qty"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<div>`;
                        str += `<label>訂單折扣：</label>`;
                        str += `<input type="text" class="form-control" id="Discount" value="` + row["Discount"] + `"`;
                        str += `</div>`;
                        str += `<br>`;
                        str += `<button id="doUpdate" class="btn btn-primary mr-2" >更新</button>`;
                        str += `</div>`;

                    }

                    $("#content").html(str);
                    $("#doUpdate").click(function () {
                        doUpdate(choose);
                    });

                    $("#detailselect").click(function () {
                        doSelect("detail", row["OrderId"]);
                    });


                    break;
                case 400:
                    $("#content").html(response['message']);
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            }
        })
        .catch(function (err) {
            $("#content").html(err);
    });
}
export { showUpdatePage };

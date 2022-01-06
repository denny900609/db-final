import { Request } from './Request.js';
import { doInsert } from './Insert.js';

function showInsertPage(choose, data1 = null) {
    let str = '';
    if (choose == 'product') {

        str += `<h4 class="card-title">新增產品</h4>`;
        str += `<div>`;
        str += `<div>`;
        str += `<label>產品代號：</label>`;
        str += `<input type="text" class="form-control" id="ProdID" placeholder="產品代號">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>產品名稱：</label>`;
        str += `<input type="text" class="form-control" id="ProdName" placeholder="產品名稱">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>產品單價：</label>`;
        str += `<input type="text" class="form-control" id="UnitPrice" placeholder="產品單價">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>產品成本：</label>`;
        str += `<input type="text" class="form-control" id="Cost" placeholder="產品成本">`;
        str += `</div>`;
        str += `<br>`;
        str += `<button id="doinsert" class="btn btn-primary mr-2" >送出</button>`;
        str += `</div>`;

        ;
    }
    else if (choose == 'member') {
        str += `編號：<input type="text" id="id"><br>`;
        str += `名稱：<input type="text" id="name"><br>`;
        str += `地址：<input type="text" id="address"><br>`;
        str += `生日：<input type="text" id="birth"><br>`;
        str += `<button id="doinsert">送出</button>`;
    }
    else if (choose == 'sale') {

        str += `訂單編號：<input type="text" id="orderid"><br>`;
        str += `客戶編號<input type="text" id="id"><br>`;
        str += `訂單日期<input type="text" id="date"><br>`;
        str += `<button id="doinsert">送出</button>`;

        
    }
    else if (choose == 'order') {
       
        str += `<h4 class="card-title">新增訂單</h4>`;
        str += `<div>`;
        str += `<div>`;
        str += `<label>訂單編號：</label>`;
        str += `<input type="text" class="form-control" id="OrderId" placeholder="訂單編號">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>員工代號：</label>`;
        str += `<input type="text" class="form-control" id="EmpId" value ="` + data1 + `">`;
        str += `</div>`;
        str += `<br>`;        
        str += `<div>`;
        str += `<label>客戶代號：</label>`;
        str += `<input type="text" class="form-control" id="CustId" placeholder="客戶代號">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>客戶名稱：</label>`;
        str += `<input type="text" class="form-control" id="showname" readonly="readonly">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>訂單日期：</label>`;
        str += `<input type="text" class="form-control" id="OrderDate" placeholder="訂單日期">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>訂單備註：</label>`;
        str += `<input type="text" class="form-control" id="Descript" placeholder="訂單備註">`;
        str += `</div>`;
        str += `<br>`;
        str += `<button id="doinsert" class="btn btn-primary mr-2" >送出</button>`;
        str += `</div>`;
    }
    else if (choose == "detail") {
        
        str += `<h4 class="card-title">新增明細</h4>`;
        str += `<div>`;
        str += `<div>`;
        str += `<label>訂單編號：</label>`;
        str += `<input type="text" class="form-control" id="OrderId" value = "` + data1 + `"`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>產品代號：</label>`;
        str += `<input type="text" class="form-control" id="ProdId" placeholder="產品代號">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>產品名稱：</label>`;
        str += `<input type="text" class="form-control" id="showname" readonly="readonly">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>產品數量：</label>`;
        str += `<input type="text" class="form-control" id="Qty" placeholder="產品數量">`;
        str += `</div>`;
        str += `<br>`;
        str += `<div>`;
        str += `<label>訂單折扣：</label>`;
        str += `<input type="text" class="form-control" id="Discount" placeholder="訂單折扣">`;
        str += `</div>`;
        str += `<br>`;
        str += `<button id="doinsert" class="btn btn-primary mr-2" >送出</button>`;
        str += `</div>`;

    }

    $("#content").html(str);
    
    $("#doinsert").click(function () {
        doInsert(choose);
    });

    $('#CustId').change(function () {
        let data = {
            "id": $(this).val(),
        };
        Request.post('./index.php?action=DoSelectAction&choose=customer', Qs.stringify(data))
            .then(function (resp) {
                let response = resp['data'];
                let rows = response['result'];
                let row = rows[0];
                $('#showname').val(row["CustName"]);
            })
    });

    $('#ProdId').change(function () {
        let data = {
            "id": $(this).val(),
        };
        Request.post('./index.php?action=DoSelectAction&choose=product', Qs.stringify(data))
            .then(function (resp) {
                let response = resp['data'];
                let rows = response['result'];
                let row = rows[0];
                $('#showname').val(row["ProdName"]);
            })
    });
}
export { showInsertPage };

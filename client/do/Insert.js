import {Request} from"./Request.js";
function doInsert(choose){

    let data = null;

    if(choose == 'product'){
        data={
            "ProdID": $("#ProdID").val(),
            "ProdName": $("#ProdName").val(),
            "UnitPrice": $("#UnitPrice").val(),
            "Cost": $("#Cost").val(),
        };

    }
    else if(choose == 'member'){
        data={
            "id": $("#id").val(),
            "name": $("#name").val(),
            "address": $("#address").val(),
            "birth": $("#birth").val(),
        }
    }
    else if(choose == 'sale'){
        data={
            "orderid": $("#orderid").val(),
            "id": $("#id").val(),
            "date": $("#date").val(),
        }
    }
    else if(choose == 'order'){
        data={
            "OrderId": $("#OrderId").val(),
            "EmpId": $("#EmpId").val(),
            "CustId": $("#CustId").val(),
            "OrderDate": $("#OrderDate").val(),
            "Descript": $("#Descript").val(),
        }
    }
    else if (choose == 'detail') {
        data = {
            "OrderId": $("#OrderId").val(),
            "ProdId": $("#ProdId").val(),
            "Qty": $("#Qty").val(),
            "Discount": $("#Discount").val(),
        };
    }
    
    Request.post('./index.php?action=DoInsertAction&choose=' + choose, Qs.stringify(data))
    .then(function(resp){
        console.log(choose);
        let response = resp['data'];
        let str = ``;
        str += `<h3>` + response['message'] + ` `;
        str += `<small class="text-muted">` + response['status'];
        str += `</small></h3>`;
        $("#content").html(str);
    })
    .catch(function(err){
        console.log(err);
    });
}
export { doInsert }


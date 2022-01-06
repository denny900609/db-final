import {Request} from"./Request.js";
function doDelete(id, choose){
    let data={
        "id": id,
        "orderid": id,
        "proid": id,
        "seq": id,
    };
    Request.post('./index.php?action=DoDeleteAction&choose=' + choose, Qs.stringify(data))
    .then(function(response){
        
        let data = response['data'];
        let str = ``;
        str += `<h3>` + data['message'] + ` `;
        str += `<small class="text-muted">` + data['status'];
        str += `</small></h3>`;
        $("#content").html(str);

    })
    .catch(function(err){
        console.log(err);
    });
}
export {doDelete};


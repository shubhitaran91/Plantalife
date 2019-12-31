$(document).ready(function () {

    
    
    var row = "";
    $('#dataTable').DataTable({
        "ajax":{
            "url": "https://plantalife-backend.herokuapp.com/getPlantData",
            "type": "POST",
            "datatype": "json",
            "data": {},
            success: function (data) {
                console.log(data.message);
                var len = data.message.length;
                console.log(len)
                for (var i = 0; i < len; i++) {
                    row += "<tr><td>" + data.message[i].plant_type + "</td>" + "<td>" + data.message[i].plant_name + "</td>" + "<td>" + data.message[i].plant_price + "</td> " + "<td>" + data.message[i].plant_status + "</td> " + '<td><i class="fa fa-edit"></i> / <button class="wow" onclick="'+productDelete()+'"><i class="fa fa-trash"></i></button></td></tr>'
    
                };
               
                $("#tbDetails").append(row);
            }
    
    
    
        }
    });
    
    function productDelete() {
        console.log("Do you really want to delete")
        // $(ctl).parents("tr").remove();
      }
   
    
})
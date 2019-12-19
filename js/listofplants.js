$(document).ready(function () {
    var row = "";
    $('#dataTable').DataTable({
        "ajax":{
            "url": "https://plantalife-backend.herokuapp.com/getPlantData",
            "type": "GET",
            "datatype": "json",
            "data": {},
            success: function (data) {
                console.log(data.message);
                var len = data.message.length;
                console.log(len)
                for (var i = 0; i < len; i++) {
                    row += "<tr><td>" + data.message[i].plant_type + "</td>" + "<td>" + data.message[i].plant_name + "</td>" + "<td>" + data.message[i].plant_price + "</td> " + "<td>" + data.message[i].plant_status + "</td> " + '<td><a href="" class="">Edit</a> / <a href="" onclick="productDelete()">Delete</a></td></tr> ';
    
                };
    
                $("#tbDetails").append(row);
            }
    
    
    
        }
    });
    
    function productDelete(ctl) {
        alert("Do you really want to delete")
        $(ctl).parents("tr").remove();
      }
   
    
})
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
                    row += "<tr><td>" + data.message[i].plant_type + "</td>" + "<td>" + data.message[i].plant_name + "</td>" + "<td>" + data.message[i].plant_price + "</td> " + "<td>" + data.message[i].plant_status + "</td> " + '<td><button>Edit</button> / <button onclick="'+productDelete()+'">Delete</button></td></tr>'
    
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
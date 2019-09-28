
$("#btnSubmit").click(function (event) {

    event.preventDefault();

    var form = $('#fileUploadForm')[0];

    var data = new FormData(form);
   
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "https://plantalife-backend.herokuapp.com/uploadPlantData",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
            //  alert(data.message);
             swal(data.message)
            location.reload();
            window.location.href='/listofplants.html';
        },
        error: function (e) {
            console.log("ERROR : ", e);
        }
    })
})

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
                    row += "<tr><td>" + data.message[i].plant_type + "</td>" + "<td>" + data.message[i].plant_name + "</td>" + "<td>" + data.message[i].plant_price + "</td> " + "<td>" + data.message[i].plant_status + "</td> " + "<td> Edit/Delete  </td></tr> ";
    
                };
    
                $("#tbDetails").append(row);
            }
    
    
    
        }
    });
    
    
})

// document.getElementById("myButton").onclick = function () {
//     location.href = "listofplants.html";
// };

$("#modalButton").click(function(event) {
  event.preventDefault();

  var form = $("#fileUploadForm")[0];

  var data = new FormData(form);

  $('#fileUploadForm')[0].reset();

  $('#loading').css({'position': 'fixed'})

  

  $.ajax({
    type: "POST",
    enctype: "multipart/form-data",
    url: "https://plantalife-backend.herokuapp.com/uploadPlantData",

    data: data,
    processData: false,
    contentType: false,
    cache: false,
    success: 
      $("#buttonAlert").addClass('show') ,
    error: function(e) {
      console.log("ERROR : ", e);
      $('#loading').css({'position': ''})
    }
  });
});

$(document).ready(function() {
  // var row = "";
  // $('#dataTable').DataTable({
  //     "ajax":{
  //         "url": "https://plantalife-backend.herokuapp.com/getPlantData",
  //         "type": "GET",
  //         "datatype": "json",
  //         "data": {},
  //         success: function (data) {
  //             console.log(data.message);
  //             var len = data.message.length;
  //             console.log(len)
  //             for (var i = 0; i < len; i++) {
  //                 row += "<tr><td>" + data.message[i].plant_type + "</td>" + "<td>" + data.message[i].plant_name + "</td>" + "<td>" + data.message[i].plant_price + "</td> " + "<td>" + data.message[i].plant_status + "</td> " + "<td> Edit/Delete  </td></tr> ";
  //             };
  //             $("#tbDetails").append(row);
  //         }
  //     }
  // });
});

// document.getElementById("myButton").onclick = function () {
//     location.href = "listofplants.html";
// };



$(document).ready(function () {

  $('#loading').hide();
  $('#loading').css({ 'position': '' })

  $("#btnSubmit").click(function (event) {
    event.preventDefault();

    var form = $("#fileUploadForm")[0];

    var data = new FormData(form);

    $('#fileUploadForm')[0].reset();

    $('#loading').show();
    $('#loading').css({ 'position': 'fixed' });

    $.ajax({
      type: "POST",
      enctype: "multipart/form-data",
      url: "https://plantalife-backend.herokuapp.com/uploadPlantData",

      data: data,
      processData: false,
      contentType: false,
      cache: false,
      success: function (data) {
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
        alert(data.message);

        //location.reload();
        // window.location.href = "/listofplants.html";
      },
      error: function (e) {
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
        console.log("ERROR : ", e);
      }
    });
  });

});

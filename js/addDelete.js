

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
      url: "http://localhost:5000/uploadPlantData",

      data: data,
      processData: false,
      contentType: false,
      cache: false,
      success: function (data) {
        
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
        // alert(data.message);
        // $("#buttonAlert").addClass('show') 
        if(data == "error"){
          Notiflix.Report.Failure( 'Oops Something went wrong', 'Please Try Again', 'OK' );
      }else{
          Notiflix.Report.Success( 'Item Added Successfully', 'Click OK To Continue' );
      }

        //location.reload();
        //  window.location.href = "./listofplants.html"; 
      },
      error: function (e) {
        $('#loading').hide();
        $('#loading').css({ 'position': '' });
        console.log("ERROR : ", e);
        Notiflix.Report.Warning( 'Network Issue', 'Try Again Later', 'OK' ); 
      }
    });
  });

 

});

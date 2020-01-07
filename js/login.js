$(document).ready(function() {
  // sessionStorage.setItem('loginStatus', false);
  $("#login").click(function(e) {
    e.preventDefault();
    $("#loginModal").show();
    if(localStorage.email != null || localStorage.pass !=null){
      $("#email").val(localStorage.email);
      $("#password").val(localStorage.pass);

    }
  });

  $("#closeModal").click(function() {
    $("#loginModal").hide();
  });

  $("#cancel").click(function() {
    $("#loginModal").hide();
  });

  $("#submit").click(function(e) {
    e.preventDefault();
    // Ajax Calling for API for login
    var loginData = {
      email: $("#email").val(),
      password: $("#password").val()
    };
    $.ajax({
      type: "POST",
      enctype: JSON,
      url: "http://ec2-13-232-51-230.ap-south-1.compute.amazonaws.com:5000/login",

      data: loginData,

      success: function(data) {
        // sessionStorage.setItem('loginStatus', true);
        alert(data.message);
      },
      error: function(e) {
        console.log("ERROR : ", e);
      }
    });
  });

  $("#remember").click(function() {
    if ($(this).prop("checked") == true) {
      localStorage.email = $("#email").val();
      localStorage.pass = $("#password").val();
      localStorage.chkbox = $("#remember").val();
    } else if ($(this).prop("checked") == false) {
      localStorage.email = "";
      localStorage.pass = "";
      localStorage.chkbox = "";
    }
  });
});

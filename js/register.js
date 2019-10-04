$(document).ready(function(){

    $('#signUp').click(function(e){

        e.preventDefault();
        $('#loginModal').hide();
        $('#signUpModal').show();
    })

    $('#closeSignUp').click(function(){
        $('#signUpModal').hide();
    })

    $('#cancelSignUp').click(function(){
        $('#signUpModal').hide();
    })

    $('#rem').click(function(){
        if($(this).prop("checked") == true){
            localStorage.email = $('#email_id').val();
            localStorage.pass = $('#pass').val();
            localStorage.chkbox = $('#rem').val();
        }
        else if($(this).prop("checked") == false){
            localStorage.email = '';
            localStorage.pass = '';
            localStorage.chkbox = '';
        }
    });


    $('#submitSignUp').click(function(e){
        e.preventDefault();
        console.log('Ajax Calling for API')

        var registerData = {

        }
    })


})
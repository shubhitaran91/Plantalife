$(document).ready(function(){

    $('#login').click(function(e){
        e.preventDefault();
        $('#loginModal').show();
    })


    $('#closeModal').click(function(){
        $('#loginModal').hide();
    })

    $('#cancel').click(function(){
        $('#loginModal').hide();
    })

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

    $('#submit').click(function(e){

        e.preventDefault();
        // Ajax Calling for API
        console.log('Ajax Calling for API')

        

    })

    $('#remember').click(function(){
        if($(this).prop("checked") == true){
            localStorage.email = $('#email').val();
            localStorage.pass = $('#password').val();
            localStorage.chkbox = $('#remember').val();
        }
        else if($(this).prop("checked") == false){
            localStorage.email = '';
            localStorage.pass = '';
            localStorage.chkbox = '';
        }
    });

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
    })



})


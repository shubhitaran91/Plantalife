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

    $('#submit').click(function(e){

        e.preventDefault();
        // Ajax Calling for API for login
        var loginData = {
            email :  $('#email').val(),
            password : $('#password').val()
        }


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

    

})


jQuery(function ($) {
    $('.student-login .login-area .pass-only-login').on('click', function (e) {
        e.preventDefault();

        var type = $(this).attr('data-type');
        if (type) {
            $(this).removeAttr('data-type');
            $(this).html("Login using the master password.");

            $('<input>').attr({
                type: 'email',
                name: 'email-student',
                placeholder: 'Enter Email',
                required: 'required',
            }).css('display', 'none').prependTo('#mm-studentLoginForm').fadeIn();

            $('.student-login .login-area .login-instructions').html('Please login with your email and password to access the student-only area.');
            $('.forgot-pass-link').fadeIn();
        } else {

            $(this).html("Login using your email and password.");
            $('.student-login .login-area .login-instructions').html('Please login with the master password to access the student-only area.');

            $(this).attr('data-type', 'pass-only');
            $('.student-login .login-area form [type="email"]').fadeOut("normal", function () {
                $(this).remove();
            });
            $('.forgot-pass-link').fadeOut();
        }

    });

    $("#student-new-pass, #student-new-pass-confirm").keyup(checkPasswordMatch);
    function checkPasswordMatch() {
        var password = $("#student-new-pass").val();
        var confirmPassword = $("#student-new-pass-confirm").val();

        if(password.length<8){
            $("#reset-pass-notice").html("Your password must be at least 8 characters.").fadeIn();
        }else{
            $("#reset-pass-notice").hide();
            if (password !== confirmPassword) {
                if(confirmPassword.length>0){
                    $('#mm-studentResetPass input[type="submit"]').attr('disabled', true);
                    $("#reset-pass-notice").html("Passwords do not match!").show();
                }
            } else {
                $('#mm-studentResetPass input[type="submit"]').attr('disabled', false);
                $("#reset-pass-notice").fadeOut();
            }
        }

    }
});
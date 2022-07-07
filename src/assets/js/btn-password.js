function btnPassword() {
    const eye = document.querySelector('.fa-eye');
    const input = document.querySelector('#pass');

    if (input.type == "password") {
        input.type = "text";
        eye.style.opacity = 0.3;
    }else {
        input.type = "password";
        eye.style.opacity = 0.8;
    }
}

function btnPassword2() {
    const eye = document.querySelector('.fa-eye');
    const input = document.querySelector('#pass-register');

    if (input.type == "password") {
        input.type = "text";
        eye.style.opacity = 0.3;
    }else {
        input.type = "password";
        eye.style.opacity = 0.8;
    }
}
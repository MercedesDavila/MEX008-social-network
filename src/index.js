// aqui exportaras las funciones que necesites
// const loginButton = document.getElementById('login-button');
// const registerButton = document.getElementById('register-button');
// const closeButton = document.getElementById('close');
// const closerButton = document.getElementById('close-r');


//function open or close sections
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};
//Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};

//functions to change sections

// const goinglogin = () => {
//     hideSection('welcomepage');
//     hideSection('section-register');
//     showSection('login');
// }
// loginButton.addEventListener("click", goinglogin);

// const goingregister = () => {
//     hideSection('welcomepage');
//     hideSection('login');
//     showSection('section-register');
// }

// registerButton.addEventListener("click", goingregister);

const closelogin = () => {
    hideSection('login');
    hideSection('section-register');
    showSection('welcomepage');

}

// closeButton.addEventListener("click", closelogin);

// const closeregister = () => {
//     hideSection('section-register');
//     hideSection('login');
//     showSection('welcomepage');
// }
// closerButton.addEventListener("click", closeregister);

// const useremail = document.getElementById("email-login").value;
// const userpass = document.getElementById("pass-login").value;
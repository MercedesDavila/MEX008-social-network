/* eslint-disable no-unused-vars */


var firebaseConfig = {
    apiKey: "AIzaSyDGhmuAIAHIH_sHref9YI0QiXhAhkc1OpU",
    authDomain: "supportme-565d4.firebaseapp.com",
    databaseURL: "https://supportme-565d4.firebaseio.com",
    projectId: "supportme-565d4",
    storageBucket: "supportme-565d4.appspot.com",
    messagingSenderId: "811873389744",
    appId: "1:811873389744:web:7c5179900d830cfa"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
// var db = firebase.firestore();

//************************************** */Registro del usuario****************************************************************************************
const registerUser = () => {
    const formOne = document.getElementById("form-sign");
    //Guardan los datos que ingresa el usuario para registrarse
    const eMail = formOne.email.value;
    const password = formOne.password.value;
    const confirmPassword = formOne.cpassword.value;
    console.log("");
    //Usamos la función de firebase para crear un usuario con contraseña y verificamos que su contraseña y su confirmación coincidan para poder registrarlo.
    if (password === confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(eMail, password)
            .then(function() {
                console.log("Se ha enviado un e-mail a tu correo");
                sendEmailVerification();
            }).then(() => goProfile())
            .catch(function(error) {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
                alert(error);
                alert(errorMessage);
            });
    } else {
        alert("La confirmación de contraseña no coincide");
    }
};

//**********************Función que ve si el usuario esta activo o no **************************************
//Verifica siempre la pagina Web    
const observador = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Usuario activo");
            // User is signed in.
            const displayName = user.displayName;
            const email = user.email;

            console.log("------------------");
            console.log(user.emailVerified);
            console.log("------------------");

            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const isAnonymous = user.isAnonymous;
            const uid = user.uid;
            const providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
            console.log("No existe el usuario activo");
        }
    });
};
observador();

//****************************************************Manda un e-mail de verificación al correo del usuario para que verifique su correo y pueda ingresar a la app***************

//Función que manda el email de verificación al correo electrónico del usuario.
const sendEmailVerification = () => {
    // [START sendemailverification]
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Enviando correo');
        // [END_EXCLUDE]
        // [END sendemailverification]
    }).catch(function(error) {
        console.log(error);
    });
};

//*********************************************Inicio de sesión************************************************
//Ingreso de usuario
const loginS = () => {

    const eMailA = document.getElementById("email-login").value;
    const passwordA = document.getElementById("password-login").value;

    firebase.auth().signInWithEmailAndPassword(eMailA, passwordA)
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(errorCode);
            console.log(errorMessage);
        });
    console.log("Bienvenido a supportMe");
};



//Autenticarse con g-mail
// const btnGmail = document.getElementById("btn-gmail");
const registerGmail = () => {
    //crea una instancia del objeto del proveedor de Google
    const provider = new firebase.auth.GoogleAuthProvider();
    //Autentica a traves de una ventana emergente
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log("Hola GMail");
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log("token");
        });
};
// btnGmail.addEventListener("click", registerGmail);
//Autentificación con Facebook
const signInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ... 
            console.log('Hola Facebook');
        }).then(() => goingProfile())
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
};

//Cerrar sesión 

const closeSesion = () => {
    firebase.auth().signOut()
        .then(function() {
            console.log('Saliendo...');
        })
        .catch(function(error) {
            console.log(error);
        });
};

//Home function
const goingHome = () => {
    location.hash = '/home';
};

//Going to profile function
const goingProfile = () => {
    location.hash = '/profile';
};

// const goingLogin = () => {
//     location.hash = '/';
// };

// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in.
//         goingHome();
//     } else {
//         // No user is signed in.
//         console.log('usuario no conectado');
//         goingLogin();
//     }
// });
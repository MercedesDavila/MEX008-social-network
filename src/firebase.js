var firebaseConfig = {
    apiKey: "AIzaSyBHUStouS-ebrZIAVA8rpkCHPTqpIi5k40",
    authDomain: "supporteme-147ea.firebaseapp.com",
    databaseURL: "https://supporteme-147ea.firebaseio.com",
    projectId: "supporteme-147ea",
    storageBucket: "",
    messagingSenderId: "1007267288966",
    appId: "1:1007267288966:web:ab035c27ed063a27"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//   Registrando un usuario con contraseña

const buttonRegister = document.getElementById("button-register");

const register = () => {
    const eMail = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;

    //Usamos la función de firebase para crear un usuario con contraseña
    firebase.auth().createUserWithEmailAndPassword(eMail, password)
        .then(function() {
            sendEmailVerification();
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(error);
            console.log(errorMessage);
        });
}

// buttonRegister.addEventListener("click", register);

//Ingreso de usuario
const loginSession = document.getElementById("login-count");

const loginS = () => {
        const eMailA = document.getElementById("name-login").value;
        const passwordA = document.getElementById("pass-login").value;

        firebase.auth().signInWithEmailAndPassword(eMailA, passwordA)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log(errorCode);
                console.log(errorMessage);
            });
    }
    // loginSession.addEventListener("click", loginS);


//Verifica siempre la pagina Web
const observador = () => {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("Usuario activo")
            showMuro(user);
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;

            console.log("------------------");
            console.log(user.emailVerified);
            console.log("------------------");

            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
            console.log("No existe el usuario activo")
        }
    });
}

observador();

let showMuro = (userA) => {
    let user = userA;
    const muro = document.getElementById("muestra");

    //Si el usuario tiene el correo verificado le muestra la siguiente sección
    if (user.emailVerified) {
        muro.innerHTML = `
      <p>¡Bienvenido!</p>
      <button onclick="closeSesion()" class="button-register" id= "button-register">Cerrar Sesión</button>`;
    }

}

const closeSesion = () => {
    firebase.auth().signOut()
        .then(function() {
            console.log('Saliendo...');
        })
        .catch(function(error) {
            console.log(error);
        });
}

//Autenticarse con g-mail

const btnGmail = document.getElementById("btn-gmail");

const registerGmail = () => {

    //crea una instancia del objeto del proveedor de Google
    const provider = new firebase.auth.GoogleAuthProvider();

    //Autentica a traves de una ventana emergente
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ... 
        console.log('Hola GMail');
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...

        console.log(token);
    });
}

// btnGmail.addEventListener("click", registerGmail);

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
}

//Autentificación con Facebook
const signInFacebook = () => {

    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user
                // ... 
            console.log('Hola Facebook');
        }).then(() => goingHome())
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
}
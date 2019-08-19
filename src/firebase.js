//Archivos que se necesitan para usar firebase
firebase.initializeApp(firebaseConfig);

//Registro de usuario
const registerUser = () => {
  const formOne = document.getElementById("form-sign");
  //Guardan los datos que ingresa el usuario para registrarse
  const eMail = formOne.email.value;
  const password = formOne.password.value;
  const confirmPassword = formOne.cpassword.value;

  //Usamos la función de firebase para crear un usuario con contraseña y verificamos que su contraseña y su confirmación coincidan para poder registrarlo.
  if (password === confirmPassword) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(eMail, password)
      .then(function() {
        console.log("Se ha enviado un e-mail a tu correo");
        sendEmailVerification();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(error);
        alert(errorMessage);
      });
  } else {
    alert("La confirmación de contraseña no coincide");
  }
};

//Verifica siempre la pagina Web
const observador = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Usuario activo");
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
      console.log("No existe el usuario activo");
    }
  });
};
observador();

const sendEmailVerification = () => {
  // [START sendemailverification]
  const user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function() {
      // Email Verification sent!
      // [START_EXCLUDE]
      alert("Enviando correo");
      // [END_EXCLUDE]
      // [END sendemailverification]
    })
    .catch(function(error) {
      console.log(error);
    });
};

//Inicio de sesión
const loginS = () => {
  const eMailA = document.getElementById("email-login").value;
  const passwordA = document.getElementById("password-login").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(eMailA, passwordA)
     .then(() => goProfile())
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
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
    .then(() => goProfile())
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
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log("Hola Facebook");
    })
    .then(() => goProfile())
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

const goProfile = () => {
  location.hash = "/profile";
};

// Cerrar sesión
const closeSesion = () => {
  // alert("solo");
  firebase
    .auth()
    .signOut()
    .then(function() {
      // alert("salio usuario");
      console.log("Saliendo...");
    })
    .catch(function(error) {
      console.log(error);
    });
};

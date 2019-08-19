/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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
var db = firebase.firestore();
let user = firebase.auth().currentUser;
// const docref = firestore.doc("newPost/6oQBzaX3J4DdHh5GyK07");

function newPost() {
    let nameCompany = document.getElementById("name-company").value;
    let comment = document.getElementById("new-comment").value;
    let adress = document.getElementById("adress").value;
    let telephone = document.getElementById("telephone").value;
    let mobile = document.getElementById("mobile").value;
    let stars = document.getElementById("score-stars").value;
    let typeRecommend = document.getElementById("input-recommend").value;

    db.collection("newPost").add({
            name: nameCompany,
            comment: comment,
            telephone: telephone,
            mobile: mobile,
            adress: adress,
            stars: stars,
            type: typeRecommend

        })
        .then(function(docRef) {
            document.getElementById("input-recommend").value = '';
            document.getElementById("name-company").value = '';
            document.getElementById("new-comment").value = '';
            document.getElementById("adress").value = '';
            document.getElementById("telephone").value = '';
            document.getElementById("mobile").value = '';
            document.getElementById("score-stars").value = '';


            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
}

// Leer post
var container = document.getElementById("postRecomendations");
db.collection("newPost").onSnapshot((querySnapshot) => {
    newPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        newPost.innerHTML += `
        <div class="container-post" id="postRecomendations">
        <button class="delete-btn" id="show-modal-delete">
          <img src="./img/delete.png" alt="eliminar" />
        </button>
          <h3 class="company">${doc.data().name}</h3>
          <p class="commentary">${doc.data().comment}</p>
          <button id="show-modal-contact" class="contact">Contacto</button>
          <figure class="stars">
            <img src="./img/iconos.png" alt="Calificación 4 Estrellas " />
          </figure>
          </div>
          </div>
        `;
    });
});



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
        .then(() => goingProfile())
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


//Cerrar sesión 

const closeSesion = () => {
    firebase.auth().signOut().then(function() {
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


//Autenticarse con g-mail
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
            console.log("Hola GMail");
        }).then(() => goingProfile())
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

//Autentificación con Facebook
const signInFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        goingProfile();
    } else {
        // No user is signed in.
        console.log('usuario no conectado');
        goingHome();
    }
});


//Mercedes

//Likes 

// const likes = (id, likes) => {
//     likes++;

//     likes = parseInt(likes);
//     let washingtonRef = db.collection('newPost').doc(id);

//     return washingtonRef
//         .update({
//             like: likes,
//         })
//         .then(function() {
//             let washingtonRef = db.collection('newPost').doc(id).id;

//             let buttonLike = document.getElementById(washingtonRef);
//             buttonLike.innerHTML += ' ' + likes;
//         })
//         .then(function() {
//             console.log('Document successfully updated!');
//         })
//         .catch(function(error) {
//             // The document probably doesn't exist.
//             console.error('Error updating document: ', error);
//         });
// };
// console.log(likes());

// //Delete post

// const deletePost = id => {
//     let confirmDelete = confirm('Seguro que quieres eliminar este post?');
//     if (confirmDelete == true) {
//         db.collection('table')
//             .doc(id)
//             .delete()
//             .then(function() {
//                 console.log('Document successfully deleted!');
//             })
//             .catch(function(error) {
//                 console.error('Error removing document: ', error);
//             });
//     }
// };


// GABY--------------------------
// // Initialize Cloud Firestore through Firebase
// // const saveBtn = document.getElementById("add-n-post");

// var db = firebase.firestore();

// // const savePost = () => {

// function save() {
//   //     let recommendOption = document.getElementById("input-recommend");
//   // let complaindOption = document.getElementById("input-complain");
//   var nameCompanyPerson = document.getElementById("name-company").value;
//   var newComment = document.getElementById("new-comment").value;
//   var adressCompany = document.getElementById("adress").value;
//   var telephoneCompany = document.getElementById("adress").value;
//   var mobileTelephone = document.getElementById("mobile").value;
//   var ratingStars = document.getElementById("score-stars").value;
//   db.collection("newPost")
//     .add({
//       // type: "recommendOption || complaindOption",
//       name: nameCompanyPerson,
//       comment: newComment,
//       adress: adressCompany,
//       telphone: telephoneCompany,
//       mobile: mobileTelephone,
//       stars: ratingStars
//     })
//     .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//       console.error("Error adding document: ", error);
//     });
// }
// //   saveBtn.addEventListener("click", savePost);
// // };
// GABY--------------------------
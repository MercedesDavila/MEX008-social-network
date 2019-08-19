//Initialize Cloud Firestore
var db = firebase.firestore();
//Agregando documentos
const obtainUserDate = (
    nameUser,
    lastNameUser,
    eMail,
    userName,
    stateUser,
    cityUser,
    uhmUser
) => {
    const name = nameUser.value;
    const lastName = lastNameUser.value;
    const emailU = eMail.value;
    const usernameU = userName.value;
    const stateU = stateUser.value;
    const cityU = cityUser.value;
    const uhmU = uhmUser.value;
    db.collection("userDate")
        .add({
            first: name,
            last: lastName,
            email: emailU,
            username: usernameU,
            state: stateU,
            city: cityU,
            uhm: uhmU
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    return;
};
window.obtainUserDate = obtainUserDate;
//Agregando un post
const postUser = (
    type,
    service,
    name,
    comment,
    adress,
    telephone,
    mobile,
    stars
) => {
    console.log("hola tú");
    const typeEmpress = type;
    const typeServiceEmpress = service;
    const nameEmpress = name;
    const commentEmpress = comment;
    const adressEmpress = adress;
    const telephoneEmpress = telephone;
    const mobileEmpress = mobile;
    const starsEmpress = stars;
    db.collection("postUser")
        .add({
            typeE: typeEmpress,
            serviceE: typeServiceEmpress,
            nameE: nameEmpress,
            commentE: commentEmpress,
            adressE: adressEmpress,
            telephoneE: telephoneEmpress,
            mobileE: mobileEmpress,
            starsE: starsEmpress
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    return;
};
window.postUser = postUser;
//Leer documentos
const showDateUser = (paintDate) => {
    let paint = paintDate;
    db.collection("userDate").onSnapshot((querySnapshot) => {
        //limpiar la tabla
        paint.innerHTML = "";
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().first}`);
            paint.innerHTML += `
      <h1 id="nameUser">${doc.data().first}</h1>
      <h2 id="nameCity">${doc.data().city}</h2>
      <h3 id="nameUhm">${doc.data().uhm}</h3>
      `;
        });
    });
};
window.showDateUser = showDateUser;
// const showDate = paintPost => {
//   let paint = paintPost;
//   db.collection("postUser").onSnapshot(querySnapshot => {
//     //limpiar la tabla
//     paint.innerHTML = "";
//     querySnapshot.forEach(doc => {
//       console.log(`${doc.id} => ${doc.data().first}`);
//       paint.innerHTML += `
//         <button class="delete-btn" id="show-modal-delete">
//             <img src="./img/delete.png" alt="eliminar" />
//           </button>
//           <div class="text-post">
//           <h2>Alejandra Sánchez</h2>
//           <p id="recomendation" class="recommendation">${doc.data().typeE}</p>
//           <p id="typeCompany" class="type-company"></p>
//           <h3 id="nameCompany" class="company">${doc.data().nameE}</h3>
//           <p id="commentary" class="commentary">${doc.data().commentE}</p>
//           <button id="show-modal-contact" class="contact">Contacto</button>
//           <figure class="stars">
//             <img src="./img/iconos.png" alt="Calificación 4 Estrellas " />
//           </figure>
//         </div>
//         `;
//     });
//   });
// };
// window.showDate = showDate;
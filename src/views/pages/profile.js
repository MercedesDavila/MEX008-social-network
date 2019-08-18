let Profile = {
    render: async() => {
        let view = /*html*/ `
    <section id="" class="profile">
        
    <header>
      <div class="profile-container" id="">
        <div class="img-text-profile">
          <div class="shape-circule">
            <figure>
              <img
                src="./img/tikkho-maciel-Oed8cpob9VM-unsplash.jpg"
                alt="Foto de Alejandra Sánchez"
              />
            </figure>
          </div>
          <div class="text-profile">
            <h1>Alejandra Sánchez</h1>
            <h2>Ciudad de México</h2>
            <h3>Puebla #5</h3>
          </div>
        </div>
      </div>
    </header>

    <button class="btn-share" id="btn-share">Compártenos tu recomendación/queja</button>

    <div class="container-post" id="">
          <button class="delete-btn" id="show-modal-delete">
            <img src="./img/delete.png" alt="eliminar" />
          </button>
          <div class="text-post">
          <h2>Alejandra Sánchez</h2>
          <p class="recommendation">Recomendación</p>
          <p class="type-company">Restaurante</p>
          <h3 class="company">Pizzas Elena</h3>
          <p class="commentary">
            Las pizzas de este lugar están muy ricas y a muy buen precio
          </p>
          <button id="show-modal-contact" class="contact">Contacto</button>
          <figure class="stars">
            <img src="./img/iconos.png" alt="Calificación 4 Estrellas " />
          </figure>
        </div>
        </div>
      </section>
      `;
        return view;
    },
    after_render: async() => {
        // GABY--------------------------
        // Initialize Cloud Firestore through Firebase
        // var db = firebase.firestore();
        // db.collection("users")
        //   .add({
        //     first: "Nadia",
        //     last: "Love",
        //     born: 1813
        //   })
        //   .then(function(docRef) {
        //     console.log("Document written with ID: ", docRef.id);
        //   })
        //   .catch(function(error) {
        //     console.error("Error adding document: ", error);
        //   });
        // GABY--------------------------

        // MODAL
        // Añadir un objeto de atributos a un elemento
        const addAttributes = (element, attrObj) => {
            for (let attr in attrObj) {
                if (attrObj.hasOwnProperty(attr))
                    element.setAttribute(attr, attrObj[attr]);
            }
        };
        // Crear elementos con atributos e hijo
        const createCustomElement = (element, attributes, children) => {
            let customElement = document.createElement(element);
            if (children !== undefined)
                children.forEach(el => {
                    if (el.nodeType) {
                        if (el.nodeType === 1 || el.nodeType === 11)
                            customElement.appendChild(el);
                    } else {
                        customElement.innerHTML += el;
                    }
                });
            addAttributes(customElement, attributes);
            return customElement;
        };
        // Imprimir modal eliminar publicación
        const printModalDelete = content => {
            // Crear contenedor interno
            const modalContentElementDelete = createCustomElement(
                    "div", {
                        id: "modal-content-delete",
                        class: "modal-content-delete"
                    }, [content]
                ),
                // Crear contenedor principal
                modalContainerElementDelete = createCustomElement(
                    "div", {
                        id: "modal-container-delete",
                        class: "modal-container-delete"
                    }, [modalContentElementDelete]
                );

            document.body.appendChild(modalContainerElementDelete);

            const removeModalDelete = () =>
                document.body.removeChild(modalContainerElementDelete);

            modalContainerElementDelete.addEventListener("click", e => {
                const btnNo = document.getElementById("no-btn");
                if (e.target === modalContainerElementDelete || e.target === btnNo)
                    removeModalDelete();
            });
        };

        const deleteQuestion = `<div class="elements-modal-delete">
    <p>¿Deseas eliminar<br>esta publicación?</p>
    <button class="btn-blue" id="yes-btn">Sí</button>
    <button class="btn-blue" id="no-btn">No</button>
  </div>`;
        document
            .getElementById("show-modal-delete")
            .addEventListener("click", () => {
                printModalDelete(deleteQuestion);
            });

        // GABY-------------------------------------------------------------------------------------------------

        // Imprimir modal formulario publicación
        const printNewPost = content => {
            // Crear contenedor interno
            const modalContentNewPost = createCustomElement(
                    "div", {
                        id: "modal-content-n-post",
                        class: "modal-content-n-post"
                    }, [content]
                ),
                // Crear contenedor principal
                modalContainerNewPost = createCustomElement(
                    "div", {
                        id: "modal-container-n-post",
                        class: "modal-container-n-post"
                    }, [modalContentNewPost]
                );

            document.body.appendChild(modalContainerNewPost);

            const removeModalNewPost = () =>
                document.body.removeChild(modalContainerNewPost);

            modalContainerNewPost.addEventListener("click", e => {
                const closeBtn = document.getElementById("close-btn-form");
                if (e.target === modalContainerNewPost || e.target === closeBtn)
                    removeModalNewPost();
            });
        };

        const formNewPost = `
    <span class="close-btn" ><img src="./img/close-08.png" alt="Cerrar" id="close-btn-form"></span>
    <form class="container-newpost" id="form-newpost">
    <p style="display: block"> Tienes una...</p>
    <input type="radio"  style="width:20px;height:20px" name="option" value="recommend" id="input-recommend"><p style="color:#FF9E03">Recomendación</p>
    <!-- <br> -->
    <input type="radio" style="width:20px;height:20px" name="option" value="complain" id="input-complain"><p style="color:#F18E8C">Queja</p>
    <input
      type="text"
      id="name-company"
      placeholder="Nombre de la empresa o persona"
      class="form-input"
    />
    <textarea
    placeholder="Agrega un comentario"
      name="textarea"
      rows="3"
      cols="33"
      id="new-comment"
      class=""
    ></textarea>

    <input
      type="text"
      id="adress"
      placeholder="Dirección"
      class="form-input"
    />

    <input
      type="number"
      id="telephone"
      placeholder="Teléfono"
      class="form-input"
    />

    <input
      type="number"
      id="score-stars"
      placeholder="Número de estrellas"
      class="form-input" style="
      width: 145px;"
    />

    <button class="btn-blue" id="add-n-post">Agregar</button>
  </form>`;
        document.getElementById("btn-share").addEventListener("click", () => {
            printNewPost(formNewPost);
        });

        // Imprimir modal contacto
        const printModalContact = content => {
            // Crear contenedor interno
            const modalContentContact = createCustomElement(
                    "div", {
                        id: "contact-modal",
                        class: "contact-modal"
                    }, [content]
                ),
                // Crear contenedor principal
                modalContainerElementContact = createCustomElement(
                    "div", {
                        id: "modal-container-contact",
                        class: "modal-container-contact"
                    }, [modalContentContact]
                );

            document.body.appendChild(modalContainerElementContact);

            const removeModalContact = () =>
                document.body.removeChild(modalContainerElementContact);

            modalContainerElementContact.addEventListener("click", e => {
                const btnCloseContact = document.getElementById("close-contact");
                if (
                    e.target === modalContainerElementContact ||
                    e.target === btnCloseContact
                )
                    removeModalContact();
            });
        };

        const contactData = `<figure><img src="./img/close-08.png" alt="Cerrar" id="close-contact"></figure>
    <div class="contact-modal-elements">
    <h2 class="data-contact">Datos de contacto</h2>
    <div class="data-contact-prin"><h3 class="data-contact">Dirección</h3>
      <img src="./img/icon-contact-11.png" alt="icono de dirección" class="adress-icon"><p>Calle Constitución de 1917 #62, Departamento 105 Piso 1, Ciudad de México, Alcaldía Cuauhtémoc, CDMX</p></div>
    <div class="data-contact-prin"><h3>Telefóno o/y WhatsApp</h3>
      <div class="data-contact"><img src="./img/icon-contact-12.png" alt="icono WhatsApp"><p>55 13 82 74 17</p></div>
      <div class="data-contact"><img src="./img/icon-contact-10.png" alt="icono teléfono"><p>57 09 34 25</p></div></div>
    </div>`;
        document
            .getElementById("show-modal-contact")
            .addEventListener("click", () => {
                printModalContact(contactData);
            });
    }
};
export default Profile;
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
let Timeline = {
    render: async() => {
        let view = /*html*/ `
      <section id="postTimeline" class="timeline">
      <div class="box">
              <div class="container-1">
                  <span class="icon"><img src="./img/search-02-02.svg"></span>
                  <input type="search" id="search" placeholder="Buscar..." />
              </div>
            </div>

          <div class="container-post" id="post">
           <div class="likes-section">
            <p id="number-likes">27</p>
              <button class="n-like-btn" id="n-like">
                  <img src="./img/like-04.png" alt="dar me gusta" />
                </button>
              <button class="n-like-btn like-btn" id="w-like">
                <img src="./img/like-03.png" alt="me gusta" />
              </button>
            </div>
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

            <div class="container-post" id="post2">
            <div class="likes-section">
             <p id="number-likes">32</p>
               <button class="n-like-btn" id="n-like">
                   <img src="./img/like-04.png" alt="dar me gusta" />
                 </button>
               <button class="like-btn" id="w-like">
                 <img src="./img/like-03.png" alt="me gusta" />
               </button>
             </div>
               <div class="text-post">
               <h2>Alejandra Lopez</h2>
               <p class="recommendation">Recomendación</p>
               <p class="type-company">Restaurante</p>
               <h3 class="company">Hamburguesas al carbón</h3>
               <p class="commentary">
                 Muy ricas hamburguesas, aunque un poco caras.
               </p>
               <a href="" class="contact">Contacto</a>
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
                children.forEach((el) => {
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
        // Imprimir modal contacto
        const printModalContact = (content) => {
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

            modalContainerElementContact.addEventListener("click", (e) => {
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
export default Timeline;
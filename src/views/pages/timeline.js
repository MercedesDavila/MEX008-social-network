let Timeline = {
  render: async () => {
    let view = /*html*/ `
      <section id="" class="timeline">
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
              <button class="like-btn" id="w-like">
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
  after_render: async () => {}
};
export default Timeline;

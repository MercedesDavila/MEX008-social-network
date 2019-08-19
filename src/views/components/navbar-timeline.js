/* eslint-disable no-undef */
let navbarTimeline = {
    render: async() => {
        let view = /*html*/ `
        <nav class="navbar-timeline" id="nav-timeline">
          <a href="#/profile">
            <div class="shape-circule">
              <img src="./img/tikkho-maciel-Oed8cpob9VM-unsplash.jpg" alt="Ir a Perfil">
            </div>
            <p class="name-timeline">Alejandra Sánchez</p>
        </a>
        <a  href="" onclick="closeSesion()" class="close" id="log-out">Cerrar sesión</a>
      </nav>`;
        return view;
    },
    after_render: async() => {
        // const logOut = document.getElementById("log-out");
        // logOut.addEventListener("click", closeSesion);
    }
};
export default navbarTimeline;
let Navbar = {
    render: async() => {
        let view = /*html*/ `
    <nav class="navbar-profile" id="">
      <a href="#/Timeline" id="img-nav"><img src="./img/logo-02.png" alt="Ir a Timeline"></a>
      <a href="" class="close" id="log-out">Cerrar sesión</a>
  </nav>
          `;
        return view;
    },
    after_render: async() => {
        // const logOut = document.getElementById("log-out");
        // logOut.addEventListener("click", closeSesion);
    }
};
export default Navbar;

// NAVBAR DE TIMELINE

/* <nav class="navbar-timeline" id="">
  <a href="#/profile"><div class="shape-circule"><img src="./tikkho-maciel-Oed8cpob9VM-unsplash.jpg" alt="Ir a Perfil"></div><p class="name-timeline">Alejandra Sánchez</p></a>
  <a href="" class="close">Cerrar sesión</a>
</nav> */
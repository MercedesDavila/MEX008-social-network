let navbarTimeline = {
  render: async () => {
    let view = /*html*/ `
        <nav class="navbar-timeline" id="nav-timeline">
        <a href="#/profile"><div class="shape-circule"><img src="./img/tikkho-maciel-Oed8cpob9VM-unsplash.jpg" alt="Ir a Perfil"></div><p class="name-timeline">Alejandra Sánchez</p></a>
        <a href="" class="close">Cerrar sesión</a>
      </nav>`;
    return view;
  },
  after_render: async () => {}
};
export default navbarTimeline;

/* eslint-disable no-undef */
let navbarProfile = {
    render: async() => {
        let view = /*html*/ `
    <nav class="navbar-profile" id="nav-profile">
      <a href="#/Timeline" id="img-nav"><img src="./img/logo-02.png" alt="Ir a Timeline"></a>
      <a onClick="closeSesion()" href="" class="close" id="log-out">Cerrar sesión</a>
      </nav>
     `;
        return view;
    },
    after_render: async() => {
        // const logOut = document.getElementById('log-out');


        // logOut.addEventListener('click', closeSesion);

    }
};
export default navbarProfile;
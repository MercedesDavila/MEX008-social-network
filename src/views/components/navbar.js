let Navbar = {
    render: async() => {
        let view = /*html*/ `
    <nav>
        <img id="img-nav" src="./././img/logo-02.png" height="50px" >
        <a id="log-out" href="#">Cerrar Sesión</a>
        </nav>
        `;
        // Dentro de las comillas invertidas va la maquetación (html) del navbar
        return view;
    },
    after_render: async() => {
        const logOut = document.getElementById("log-out");
        // eslint-disable-next-line no-undef
        logOut.addEventListener("click", closeSesion);


    }
};
export default Navbar;
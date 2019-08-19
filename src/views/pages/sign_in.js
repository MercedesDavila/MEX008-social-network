/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let Signin = {
    render: async() => {
        let view = /*html*/ `
    <section class="signin-section" id="section-register">
    <a href=""><img class="return" src="./img/icon-06.png" alt="Ir atrás"></a>
    <div class="signin-elements">
        <h2>RegistrarMe</h2>
      <form id="form-sign">
      <input type="text" name="name" placeholder="Nombre" id="register-name" class="register-name">
      <input type="text" name="lastName" placeholder="Apellido" id="register-lastname" class="lastname">
      <input type="email" name="email" placeholder="e-mail" id="register-email" class="register-email">
      <input type="text" name="username" placeholder="Username" id="register-username" class="register-username">
      <input type="password" name="password" placeholder="Contraseña" id="register-password" class="register-password">
      <input type="password" name="cpassword" placeholder="Confirmar contraseña" id="register-cp" class="register-cp">
      <select name="state" size="1" class="register-select" id="register-select">
      </select>
      <input type="text" name="city" placeholder="Ciudad" class="register-city" id="register-city">
      <input type="text" name="uhm" placeholder="Unidad Habitacional" class="register-uhm" id="register-uhm">
      <input type="button" name="btn-register" value="RegistrarMe" id="button-register" class="button-register btn-blue">
  </form>
    </div>
</section>
      `;
        return view;
    },
    after_render: async() => {
        const formOne = document.getElementById("form-sign");
        // const userNameInput = document.getElementById("register-name");
        // const lastNameInput = document.getElementById("register-lastname");
        // const emailInput = document.getElementById('register-email');
        // const passwordInput = document.getElementById('register-password');
        // const passwordConfirmInput = document.getElementById('register-cp');
        // const stateInput = document.getElementById("register-select");
        // const cityInput = document.getElementById("register-city");
        // const uhmInput = document.getElementById("register-uhm");

        // const name = formOne.name.value;
        // const lastName = formOne.lastName.value;
        // const email = formOne.email.value;
        // const username = formOne.username.value;
        const select = document.getElementById("register-select");
        const statesList = [
            "Elige un estado",
            "Aguascalientes",
            "Baja California",
            "Baja California Sur",
            "Campeche",
            "Chihuahua",
            "Chiapas",
            "Ciudad de México",
            "Coahuila",
            "Colima",
            "Durango",
            "Guanajuato",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "Estado de México",
            "Michoacán",
            "Morelos",
            "Nayarit",
            "Nuevo León",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "Quintana Roo",
            "San Luis Potosí",
            "Sinaloa",
            "Sonora",
            "Tabasco",
            "Tamaulipas",
            "Tlaxcala",
            "Veracruz",
            "Yucatán",
            "Zacatecas"
        ];
        const boton = document.getElementById("button-register");
        boton.addEventListener("click", registerUser);
        //For que rellena el select con los nombres de los estados.
        for (let index = 0; index < statesList.length; index++) {
            select.options[select.options.length] = new Option(
                statesList[index],
                index
            );
        }

        // //Creando un objeto con los datos del formulario que ingreso el usuario

        // //Función constructora para el objeto userDate, donde se alamacenaran los datoa del usuario.
        // function userDate(firstName, lastName, email, userName, state, city, uhm) {
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.email = email;
        //     this.userName = userName;
        //     this.state = state;
        //     this.city = city;
        //     this.uhm = uhm;
        // }

        // const obtainFirstName = () => {
        //     const name = formOne.name.value;
        //     return name;
        // };
        // const obtainLastName = () => {
        //     const lastName = formOne.lastName.value;
        //     return lastName;
        // };
        // const obtainEmail = () => {
        //     const email = formOne.email.value;
        //     return email;
        // };
        // const obtainUserName = () => {
        //     const userName = formOne.username.value;
        //     return userName;
        // };

        // const obtainState = () => {
        //     const state = formOne.state.value;
        //     return state;
        // };
        // const obtainCity = () => {
        //     const city = formOne.city.value;
        //     return city;
        // };
        // const obtainUhm = () => {
        //     const uhm = formOne.uhm.value;
        //     return uhm;
        // };

        // const userCreate = () => {
        //     const userAdd = new userDate(
        //         obtainFirstName(),
        //         obtainLastName(),
        //         obtainEmail(),
        //         obtainUserName(),
        //         obtainCity(),
        //         obtainState(),
        //         obtainUhm()
        //     );
        //     console.log(userAdd);
        // };

        // function eventoClick() {
        //     userCreate();
        //     registerUser();
        // }

        // boton.addEventListener("click", eventoClick);
    }
};
export default Signin;
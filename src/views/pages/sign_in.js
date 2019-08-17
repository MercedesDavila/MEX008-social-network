/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let Signin = {
    render: async() => {
        let view = /*html*/ `
<section title="Window-Register" class="section-register" id="section-register">
    <h1 class="register-title">Registro</h1>
    <div>
        <form id="form-sign">
            <div class="form-row">
                <div class="  col-md-6 register-select ">
                <input type="text " placeholder="Nombre " id="name" class="register"> </div>
                <div class="  col-md-6 register-select ">
                <input type="text " placeholder="Apellido " id="lastName" class="register"> </div>
                <div class="col-md-6 ">
                <input type="text " placeholder="Username " id="username" class="register"></div>
            </div>
            <div class="form-row ">
                <div class=" col-md-6 ">
                    <input type="text" placeholder="e-mail " id="email" class="register" value="email">
                </div>
                <div class="col-md-6 ">
                    <input type="password" aria-describedby="passwordHelpInline" placeholder="Contraseña " id="password" class="register" >
                </div>
                 </div>
                <div class=" col-md-6 ">
                    <input type="password" placeholder="Confirmar contraseña" id="cpassword" class="register" >
                </div>
                <div class="  col-md-6 register-select ">
                    <input type="text " placeholder="Ciudad " class="register" id="city"> 
                </div>
            </div>
            <div class="form-row">
                <div class=" col-md-6 ">
                    <input type="text " placeholder="Unidad Habitacional " class="register" id="uhm">
                </div>
                <div>
                    <select name="Estado" name="select-state" size="1" class="register" id="state">
                    </select>                 
                </div>
             </div>

        </form>
    </div>
<input type="button" name="btn-register" value="RegistrarMe" id="button-register" class="button-register">

</section>

        `;

        return view;
    },
    after_render: async() => {
        const formOne = document.getElementById("form-sign");
        const state = document.getElementById("state");
        const stateList = ["Elige un estado", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chihuahua", "Chiapas",
            "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo",
            "Jalisco", "Estado de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
            "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas",
            "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
        ];

        //For que rellena el select con los nombres de los estados.
        for (let index = 0; index < stateList.length; index++) {
            state.options[state.options.length] = new Option(stateList[index], index);
            console.log("stateList[index]");
        }
        const boton = document.getElementById("button-register");

        //boton.addEventListener("click", registerUser);
        //Creando un objeto con los datos del formulario que ingreso el usuario

        //Función constructora para el objeto userDate, donde se alamacenaran los datoa del usuario.
        function userDate(firstName, lastName, email, userName, stateList, city, uhm) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.userName = userName;
            // this.index = index;
            this.city = city;
            // this.uhm = uhm;
        }


        const obtainFirstName = () => {
            const name = formOne.name.value;
            return name;
        };
        const obtainLastName = () => {
            const lastName = formOne.lastName.value;
            return lastName;
        };
        const obtainEmail = () => {
            const email = formOne.email.value;
            return email;
        };
        const obtainUserName = () => {
            const userName = formOne.username.value;
            return userName;
        };

        // const obtainState = () => {
        //     const state = formOne.state.value;
        //     return state;
        // };
        const obtainCity = () => {
            const city = formOne.city.value;
            return city;
        };
        // const obtainUhm = () => {
        //     const uhm = formOne.uhm.value;
        //     return uhm;
        // };

        const userCreate = () => {
            const userAdd = new userDate(obtainFirstName(),
                obtainLastName(),
                obtainEmail(),
                obtainUserName(),
                obtainCity(),
                // obtainState(),
                // obtainUhm()
            );
            console.log(userAdd);
        };

        function eventoClick() {
            userCreate();
            registerUser();
        }

        boton.addEventListener("click", eventoClick);


    }
};

export default Signin;
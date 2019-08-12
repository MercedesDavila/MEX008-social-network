let Signin = {
    render: async() => {
        let view = /*html*/ `
<section title="Window-Register" class="section-register" id="section-register">
    <h1 class="register-title">Registro</h1>
    <div>
        <form id="form-sign">
            <div class="form-row">
                <div class="  col-md-6 register-select ">
                <input type="text " placeholder="Nombre " id="register-name " class="register"> </div>
                <div class="col-md-6 ">
                <input type="text " placeholder="Username " id="register-username " class="register"></div>
            </div>
            <div class="form-row ">
                <div class=" col-md-6 ">
                    <input type="text" placeholder="e-mail " id="register-email" class="register" >
                </div>
                <div class="col-md-6 ">
                    <input type="password" aria-describedby="passwordHelpInline" placeholder="Contraseña " id="register-password" class="register" >
                </div>
                 </div>
                <div class=" col-md-6 ">
                    <input type="password" placeholder="Confirmar contraseña" id="register-cp" class="register" >
                </div>
                <div class="  col-md-6 register-select ">
                    <input type="text " placeholder="Ciudad " class="register" id="register-city "> 
                </div>
            </div>
            <div class="form-row">
                <div class=" col-md-6 ">
                    <input type="text " placeholder="Unidad Habitacional " class="register" id="register-uhm ">
                </div>
                <div>
                    <select name="Estado" name="select-state" size="1" class="register" id="register-select">
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


        const boton = document.getElementById("button-register");
        boton.addEventListener("click", registerUser);

        document.getElementById("button-register").addEventListener("click", () => {
            let email = document.getElementById("register-email");
            let pass = document.getElementById("register-password");
            let repeatPass = document.getElementById("register-cp");
            if (pass.value != repeatPass.value) {
                alert(`The passwords dont match`);
            } else if (
                (email.value == "") |
                (pass.value == "") |
                (repeatPass == "")
            ) {
                alert(`The fields cannot be empty`);
            } else {
                alert(`User with email ${email.value} was successfully submitted!`);
            }
        });

        const formOne = document.getElementById("form-sign");
        const select = document.getElementById("register-select");
        const statesList = ["Elige un estado", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chihuahua", "Chiapas",
            "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo",
            "Jalisco", "Estado de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
            "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas",
            "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
        ]


        //For que rellena el select con los nombres de los estados.
        for (let index = 0; index < statesList.length; index++) {
            select.options[select.options.length] = new Option(statesList[index], index);
        }
    }
};

export default Signin;
let Signin = {
    render: async() => {
        let view = /*html*/ `
        <section title="Window-Register" class="section-register" id="section-register">

        <h1 class="register-title">Registro</h1>
        <div>
            <form>
                <div class="form-row">
                    <div class="  col-md-6 register-select ">

                        <input type="text " placeholder="Nombre " id="register-name " class="register"> </div>
                    <div class="col-md-6 ">

                        <input type="text " placeholder="Username " id="register-username " class="register">
                    </div>
                </div>
                <div class="form-row ">
                    <div class=" col-md-6 ">
                        <input type="text" placeholder="e-mail " id="register-email" class="register" >
                    </div>
                    <div class="col-md-6 ">
                        <input type="password" aria-describedby="passwordHelpInline" placeholder="Contraseña " id="register-password" class="register" >
                    </div>
                    <div class=" col-md-6 ">
                    <input type="password" placeholder="Confirmar contraseña" id="register-cp" class="register" >
                </div>

                 <div class="  col-md-6 register-select ">
                        <input type="text " placeholder="Ciudad " class="register" id="register-city "> </div>
                </div>

                <div class="form-row">
                    <div class=" col-md-6 ">
                        <input type="text " placeholder="Unidad Habitacional " class="register" id="register-uhm ">
                    </div>
                
                    <div>
                        <select id="inputState " class="register ">               
                            <option value="nothing ">Elige tu estado</option>
                            <option value="ags ">Aguascalientes</option>
                            <option value="bc ">Baja California</option>
                            <option value="bcs ">Baja California Sur</option>
                            <option value="camp ">Campeche</option>
                            <option value="chis ">Chiapas</option>
                            <option value="chih ">Chihuahua</option>
                            <option value="cdmx ">Ciudad de México</option>
                            <option value="coah ">Coahuila</option>
                            <option value="col ">Colima</option>
                            <option value="dgo ">Durango</option>
                            <option value="gto ">Guanajautao</option>
                            <option value="gro ">Guerrero</option>
                            <option value="hgo ">Hidalgo</option>
                            <option value="jal ">Jalisco</option>
                            <option value="edomex ">México</option>
                            <option value="mich ">Michoacán</option>
                            <option value="mor ">Morelos</option>
                            <option value="nay ">Nayarit</option>
                            <option value="nl ">Nuevo León</option>
                            <option value="oax ">Oaxaca</option>
                            <option value="pue ">Puebla</option>
                            <option value="qro ">Querétaro</option>
                            <option value="qroo ">Quintana Roo</option>
                            <option value="slp ">San Luis Potosí</option>
                            <option value="sin ">Sinaloa</option>
                            <option value="son ">Sonora</option>
                            <option value="tab ">Tabasco</option>
                            <option value="tamps ">Tamaulipas</option>              
                            <option value="tlax ">Tlaxcala</option>
                            <option value="ver ">Veracruz</option>
                            <option value="yuc ">Yucatán</option>
                            <option value="zac ">Zacatecas</option>
                        </select>
                        
                    </div>
                </div>
            </form>
        </div>
        <button type="button " value="RegistrarMe " id="button-register" class="button-register ">RegisterMe</button>

    </section>

        `;
        return view;
    },
    // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
    // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
    after_render: async() => {
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
    }
};

export default Signin;
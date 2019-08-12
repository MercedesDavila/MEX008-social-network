let Login = {
    render: async() => {
        let view = /*html*/ `
        <section class="login" id="login">
        <div class="login-body">

            <div class="info-user">
                <input type="button" class="fb-button"  id="btn-facebook" value="Iniciar sesión con Facebook">   
                <input type="button" id="btn-gmail" class="google-button" value="Iniciar sesión con Google">

                <input type="text" name="email" id="name-login" placeholder="Correo">
                <form class="form-inline">
                    <div class="form-group">
                        <input type="password" id="pass-login" aria-describedby="passwordHelpInline" placeholder="Contraseña">
                        <small id="passwordHelpInline" class="text-muted">
                       <p aling="cemter">Must be 8-20 characters long.</p> 
                      </small>
                    </div>
                </form>

                <input type="button" id="login-count" class="enter-button" value="Iniciar">
            </div>
        </div>
    </section>
`;
        return view;
    },
    // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
    // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
    after_render: async() => {
        // aqui exportaras las funciones que necesites
        // const loginButton = document.getElementById("login-button");
        // const registerButton = document.getElementById("register-button");
        // const closeButton = document.getElementById("close");
        const btnGmail = document.getElementById("btn-gmail");
        const btnFacebook = document.getElementById("btn-facebook");
        // loginButton.addEventListener("click", goinglogin);
        // registerButton.addEventListener("click", goingregister);
        // closeButton.addEventListener("click", closelogin);
        btnGmail.addEventListener("click", registerGmail);
        btnFacebook.addEventListener("click", signInFacebook);
    }
};

export default Login;
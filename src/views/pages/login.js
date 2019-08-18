/* eslint-disable no-undef */
let Login = {
    render: async() => {
        let view = /*html*/ `
    <section class="login-section" id="login">
        <a href=""><img class="return" src="./img/icon-06.png" alt="Ir atrás"></a>
        <div class="login-elements">
        <h2>Iniciar sesión</h2>
        <button id="btn-gmail" class="sn-btn google-btn"><img src="./img/gmail-07.png" alt="Iniciar sesión con Gmail"> Iniciar sesión con Gmail</button>
        <button id="btn-facebook" class="sn-btn facebook-btn" ><img src="./img/icon-05.png" alt="Iniciar sesión con Facebook"> Iniciar sesión con Facebook</button>
        
        <form name="login" id="authentication-form">
        <input
            type="email"
            id="email-login"
            placeholder="e-mail"
            class="form-email"
          />
       <input
          type="password"
          id="password-login"
          placeholder="contraseña"
          class="form-password"
        />
        <button id="login-count" class="btn-blue">Iniciar sesión</button>
      </form>
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
        const buttonS = document.getElementById("login-count");
        // loginButton.addEventListener("click", goinglogin);
        // registerButton.addEventListener("click", goingregister);
        // closeButton.addEventListener("click", closelogin);
        btnGmail.addEventListener("click", registerGmail);
        btnFacebook.addEventListener("click", signInFacebook);
        buttonS.addEventListener("click", loginS);
    }
};

export default Login;
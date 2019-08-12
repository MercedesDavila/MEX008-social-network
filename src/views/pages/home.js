//  Se define la raíz de la data

let getPostsList = async() => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    try {
        const response = await fetch(
            `https://5bb634f6695f8d001496c082.mockapi.io/api/posts`,
            options
        );
        const json = await response.json();
        // console.log(json)
        return json;
    } catch (err) {
        console.log("Error getting documents", err);
    }
};

let Home = {
    render: async() => {
        let posts = await getPostsList();
        let view = /*html*/ `
       <section class="welcome-page" id="welcomepage">
       <div class="welcome-body">
           <div class="logo">
               <figure>
                   <img src="img/logo-02.png" alt="logo">
               </figure>
           </div>
           <div class="description">
               <p>SupportMe te ayudará a mantener el contacto con antiguas amigas, vecinas y/o conocidas. 
               </p>
           </div>

           <a id="login-button" class="login-button" href="#/login">Iniciar sesión</a>
           <a id="register-button" class="register-button" href="#/register">Registrarse</a>
   </section>
       `;
        return view;
    },
    after_render: async() => {}
};

export default Home;
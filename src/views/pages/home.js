/* eslint-disable no-unused-vars */
//  Se define la raíz de la data

let getPostsList = async () => {
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
  render: async () => {
    let posts = await getPostsList();
    let view = /*html*/ `
    <section class="home-section" id="welcomepage">
      <div class="home-elements">
      <figure><img src="./img/logo_corregido.png" srcset="./img/logo-2.png 600w" alt="Logo SupportMe"></figure>
      <div class="text-information">La red social que te ayudará a mantenerte informada acerca del nuevo lugar donde vivirás haciendo más fácil el proceso de adaptación a tu nuevo hogar. Además podrás mantener el contacto con tus amigas, vecinas y/o conocidas.</div>
      <div class="two-btn">
      <div class="btn-simulation"><a id="login-button" href="#/login">Iniciar sesión</a></div>
      <div class="btn-simulation"><a id="register-button" href="#/register">RegistrarMe</a></div>
      </div>
    </div>
    </section>
         `;
    return view;
  },
  after_render: async () => {}
};

export default Home;

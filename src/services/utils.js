//Declaro una constante llamada "Utils"
const Utils = {
  // Analizar una url y divídirla en recurso, id y verbo
  parseRequestURL: () => {
    let url = location.hash.slice(0).toLowerCase() || "/";
    console.log("url", url);
    let r = url.split("/");
    console.log("r", r);
    let request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];
    console.log("parseRequestURL", request);

    return request;
  },

  // Implementación de suspensión simple

  sleep: ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};

export default Utils;

function initTraitement(){
  console.log("Page succesfully loaded");
  generateSummary();
}

function generateSummary(){
  console.log('generation');
  let url = location; //récupère l'URL de la page
  let params = new URLSearchParams(url.search.slice(1)); //récupère le contenu de l'url après le '?' (inclus) et le sépare
  let infos = url.search.slice(1).split('&');
  var infosContainer = createContainer('infosContainer', 'infosContainer', 'infosContainer container', document.body, '')
  /*infos.forEach((infos, i) => {
    var newSpan = createSpan('spanUserInfo', 'spanUserInfo', 'spanUserInfo cLabel', infos, infosContainer);
    createBreakline(newSpan,1);
  });*/
  for (var i = 0; i < infos.length; i++) {
    var newSpan = createSpan('spanUserInfo', 'spanUserInfo', 'spanUserInfo cLabel', infos[i], infosContainer);
  }
}

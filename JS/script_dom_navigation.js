function init(){
  var body = document.getElementsByTagName('body')[0];
  document.title = 'DOM NAVIGATION';

  var btn_fnode = document.getElementById('btn_fnode');
  //console.log(btn_fnode);
  var btn_replace = document.createElement('input');
  btn_replace.setAttribute('id','btn_replace');
  btn_replace.setAttribute('class','btn');
  btn_replace.setAttribute('type','button');
  btn_replace.setAttribute('value','Remplacer');
  btn_replace.setAttribute('onclick','replace()');

  body.insertBefore(btn_replace,btn_fnode);
}

//afficher le contenu du dom bouton toto
function fNode(){
  var HTML = document.firstChild.name;
  console.log("fNode"); // fNode
  console.log(HTML); //undefined
  console.log(typeof(HTML)); //undefined
  console.log(typeof(document.firstChild)); //object

  HTML = document.firstChild.nodeName;
  console.log(HTML); //HTML

  HTML = document.lastChild.nodeName;
  console.log(HTML); //HTML

  HTML = document.childNodes;
  console.log(HTML); //NodeList [html]

  var entete = document.getElementsByTagName('html')[0].firstChild.nodeName;
  console.log(entete); //HEAD

  var titre = document.getElementsByTagName('html')[0].firstChild.childNodes[0].nodeType;
  if (titre==3) titre = "TEXT_NODE";
  console.log(titre); //TEXT_NODE

  var titre = document.getElementsByTagName('html')[0].firstChild.childNodes[0].nodeName;
  console.log(titre); //#text

  var objEntete = document.getElementsByTagName('html')[0].firstChild;
  console.log(objEntete); // > <head name="HEAD"> </head>

  var objTitle = document.getElementsByTagName('head')[0].firstChild.nextSibling;
  console.log(objTitle); //<meta charset="utf-8" lang="en">

  var objTitle = objEntete.firstChild.nextSibling;
  console.log(objTitle); //<meta charset="utf-8" lang="en">

  var titreValue = objTitle.innerHTML; //Texte contenu dans le titre
  console.log(titreValue);

  var titreValue = objTitle.childNodes[0].nodeValue; //Texte contenu dans le titre
  console.log('texte du title: ' + titreValue);

  var titreValue = objTitle.firstChild.nodeValue; //Texte contenu dans le titre
  console.log('texte du title : ' + titreValue);

  var enfantsDiv1 = document.getElementById('div1').childNodes;
  console.log(enfantsDiv1);
}

//Insérer un paragraphe avant le premier
function addPara(){
  var monDiv = document.getElementById('div1');

  var monParagraphe = document.createElement('p');
  var paraText = document.createTextNode('Mon Paragraphe du DOM');
  monParagraphe.setAttribute('id','paraDOM');
  monParagraphe.setAttribute('name','n_paraDOM');
  monParagraphe.setAttribute('class','toto');
  monParagraphe.appendChild(paraText);

  monDiv.appendChild(monParagraphe);

  var monParagrapheAV = document.createElement('p');
  var paraTextAV = document.createTextNode('Mon Paragraphe du DOM AVANT');
  monParagrapheAV.setAttribute('id','paraDOM2');
  //monParagrapheAV.setAttribute('class','toto'); //add toto class
  //monParagrapheAV.removeAttribute('class'); //
  //monParagrapheAV.setAttribute('class','toto tutu');
  //monParagrapheAV.setAttribute('class','toto'); //add toto class
  //monParagrapheAV.setAttribute('class','tutu'); //add toto class
  monParagrapheAV.setAttribute('class','toto');
  monParagrapheAV.classList.add('tutu');
  monParagrapheAV.appendChild(paraTextAV);

  monDiv.insertBefore(monParagrapheAV,monParagraphe);
}

function replace(){
  var monParagrapheRemplace = document.createElement('p');
  var texteRemplace = document.createTextNode('Un Paragraphe de Remplacement');
  monParagrapheRemplace.appendChild(texteRemplace);

  var parent = document.getElementById('div1');
  var child = document.getElementById('p1');
  parent.replaceChild(monParagrapheRemplace, child);
}

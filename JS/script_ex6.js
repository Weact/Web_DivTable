function init(){
  var body = document.getElementsByTagName('body')[0];
  console.log("Page has been successfully loaded");
  let url = location;
  let params = new URLSearchParams(url.search.slice(1));
  var images = ['billard_imgEx6.jpg','carte_imgEx6.jpg','Des_imgEx6.jpg','des20_imgEx6.jpg','echec_imgEx6.jpg','rubikscube_imgEx6.jpg'];
  console.log(url);

  var btnReset = document.createElement('input');
  btnReset.setAttribute('type','reset');
  btnReset.setAttribute('class','resetForm btn');
  btnReset.setAttribute('value','Reinitialiser');
  btnReset.setAttribute('onclick','window.location = "Exercice6.html"');
  body.appendChild(btnReset);

  if(params.get('imageSelector') != null && params.get('imageSelector') != ''){

  var imageContainer = document.createElement('div');
  imageContainer.setAttribute('class','container imgContainer');
  body.appendChild(imageContainer);

  params.forEach(item => {
    var newImage = document.createElement('img');
    for (var i = 0; i < images.length; i++) {
      if(item == images[i]){
        newImage.setAttribute('src','../Images/'+item+'');
        newImage.setAttribute('class','displayedImage');
        newImage.setAttribute('alt','../Images/'+item+'');
        newImage.setAttribute('title',''+item+'');
        imageContainer.appendChild(newImage);
      } //if item corresponds
    } //for i images length

  }); //foreach
  } //if params
} //function

function generateSelect(){
  var images = ['billard_imgEx6.jpg','carte_imgEx6.jpg','Des_imgEx6.jpg','des20_imgEx6.jpg','echec_imgEx6.jpg','rubikscube_imgEx6.jpg'];
  var body = document.getElementsByTagName('body')[0];

  var imageForm = document.createElement('form');
  imageForm.setAttribute('class','imgForm');
  imageForm.setAttribute('action','');
  imageForm.setAttribute('method','get');
  imageForm.setAttribute('id','iForm');

  body.appendChild(imageForm);

  var selectContainer = document.createElement('div');
  selectContainer.setAttribute('class','container selectContainer');
  imageForm.appendChild(selectContainer);

  var selectImage = document.createElement('select');
  selectImage.setAttribute('class','imageSelect');
  selectImage.setAttribute('multiple','true');
  selectImage.setAttribute('name','imageSelector');
  selectContainer.appendChild(selectImage);

  var baseOption = document.createElement('option');
  baseOption.setAttribute('class','selectOptions');
  baseOption.value = "";
  baseOption.text = "Selectionnez une image";
  baseOption.setAttribute('selected','true');
  baseOption.setAttribute('name','imgSelectorBaseOption');
  selectImage.appendChild(baseOption);

  for (var i = 0; i < images.length; i++) {
    var optionSelect = document.createElement('option');
    optionSelect.setAttribute('class','selectOptions');
    optionSelect.value = images[i];

    var selectText = images[i].split('_');
    optionSelect.text = selectText[0];
    selectImage.appendChild(optionSelect);
  }

  var btnDisplay = document.createElement('input');
  btnDisplay.setAttribute('type','submit');
  btnDisplay.setAttribute('class','dispImage btn');
  btnDisplay.setAttribute('value','Afficher les images');

  selectContainer.appendChild(btnDisplay);
}

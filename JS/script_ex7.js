let images = ['WoWSL.jpg','RDR2.jpg','HADES.png'];
let price = [44.99,59.99,20.99];

function init(){
  console.log("Page has been successfully loaded");

  var body = document.getElementsByTagName('body')[0];

  var divContainer = document.createElement('div');
  divContainer.setAttribute('class','container');
  body.appendChild(divContainer);

  var title = document.createElement('span');
  title.setAttribute('class','div-title');
  var titleText = document.createTextNode("JEUX ET PRIX");
  title.appendChild(titleText);
  divContainer.appendChild(title);

  var separation = document.createElement('hr');
  divContainer.appendChild(separation);

  var selectContainer = document.createElement('div');
  selectContainer.setAttribute('class','container selectContainer');
  divContainer.appendChild(selectContainer);

  var selectImage = document.createElement('select');
  selectImage.setAttribute('class','imageSelect');
  selectImage.setAttribute('multiple','true');
  selectImage.setAttribute('name','imageSelector');
  selectImage.setAttribute('id','jeux');
  selectImage.setAttribute('onchange','Calcul()');

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
    //optionSelect.setAttribute('style','background-image:url(../Images/'+images[i]+')');
    //optionSelect.setAttribute('max-width','100%');
    //optionSelect.setAttribute('max-height','100%');
    optionSelect.value = images[i];
    optionSelect.setAttribute('value',''+price[i]+'')
    var selectText = images[i].split('_');
    optionSelect.text = selectText[0];
    selectImage.appendChild(optionSelect);
  }
}



function Calcul()
{

  var total = 0;
    var ChoixCd = document.getElementById("jeux");
    for(i=0;i<ChoixCd.options.length;i++)
    {
      if (ChoixCd.options[i].selected)
      {
        if(ChoixCd.options[i].index == 0){
          console.log('Invalid Index');
        }else{
          total = parseFloat(ChoixCd.options[i].value) + total;
        }
      }
    }

    console.log(total);
}

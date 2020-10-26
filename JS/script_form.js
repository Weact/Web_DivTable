function init(){
  console.log('successfully loaded');
}

function generateForm(fname, fid, fclass, faction, fmethod){
  var body = document.body;
  var form = document.createElement('form');
  form.setAttribute('name',fname);
  form.setAttribute('id',fid);
  form.setAttribute('class',fclass);
  form.setAttribute('action',faction);
  form.setAttribute('method',fmethod);

  //creating fieldset with legend textnode => "CIVILITE"
  let fieldset_civilite = createFieldset('fieldsetCivilite', 'fieldsetCivilite', form, 'CIVILITE');

  //DIV : cname, cid, cclass, ctargetParent, style
  //LABEL: lname, lid, lclass, lfor, ltargetParent, text
  //INPUT: itype, iname, iid, iclass, ivalue, min, max, iplaceholder, interaction, action, itargetParent, required
  //SPAN : sname, sid, sclass, stextnode, stargetParent

  let nomContainer = createContainer('nomContainer', 'nomContainer', 'nomContainer container', fieldset_civilite, '');
  let nomLabel = createLabel('nNomLabel','nom','nom cLabel', 'nomInput', nomContainer,'Nom :');
  let nomInput = createInput('text','nom','nomInput','nomInput textInput','', 0, 20,'Nom','','', nomContainer, 'required');

  let prenomContainer = createContainer('prenomContainer', 'prenomContainer', 'prenomContainer container', fieldset_civilite, '');
  let prenomLabel = createLabel('namePrenomLabel','idPrenom', 'clPrenom cLabel', 'prenomInput', prenomContainer, 'Prenom :');
  let letPrenomInput = createInput('text','prenom','prenomInput', 'prenomInput textInput', '', 0, 35, 'Prenom', '', '', prenomContainer, 'required');

  let ddnContainer = createContainer('ddnContainer',' ddnContainer', 'ddnContainer container', fieldset_civilite, '');
  let ddnLabel = createLabel('ddnLabel','ddnLabel', 'clDDN cLabel', 'ddnInput', ddnContainer, 'Date de Naissance :');
  let ddnInput = createInput('date', 'ddn', 'ddnInput', 'ddnInput dateInput', '', '', '', '', '', '', ddnContainer, 'required');

  let genderContainer = createContainer('genderContainer', 'genderContainer', 'genderContainer container', fieldset_civilite, '');
  let genderLabel = createLabel('genderLabel', 'genderLabel', 'clGender cLabel', '', genderContainer, 'Genre');
  createBreakline(genderContainer, 1);
  let genderLabelHomme = createLabel('hommeLabel','hommeLabel', 'clHomme cLabel', 'genderInputH', genderContainer, 'HOMME ');
  let genderInputHomme = createInput('radio', 'gender', 'genderInputH', 'genderInput radioInput', 'homme', '', '', '', '', '', genderContainer, 'required');
  createBreakline(genderContainer, 1);
  let genderLabelFemme = createLabel('femmeLabel','femmeLabel', 'clFemme cLabel', 'genderInputF', genderContainer, 'FEMME ');
  let genderInputFemme = createInput('radio', 'gender', 'genderInputF', 'genderInput radioInput', 'femme', '', '', '', '', '', genderContainer, 'required');
  createBreakline(genderContainer, 1);
  let genderLabelAutre = createLabel('autreLabel','autreLabel', 'clAutre cLabel', 'genderInputA', genderContainer, 'AUTRE ');
  let genderInputAutre = createInput('radio', 'gender', 'genderInputA', 'genderInput radioInput', 'autre', '', '', '', '', '', genderContainer, 'required');

  let emailContainer = createContainer('emailContainer','emailContainer','emailContainer container', form, '');
  let mailLabel1 = createLabel('nameEMailLabel1','idMail1','clMail cLabel', 'emailInput1', emailContainer, 'EMail :');
  let mailInput1 = createInput('mail','email1','emailInput1', 'emailInput textInput', '', 0, 35, 'EMail', '', '', emailContainer, 'required');
  createBreakline(emailContainer, 2);
  let mailLabel2 = createLabel('nameEMailLabel2','idMail2','clMail cLabel', 'emailInput2', emailContainer, 'Confirmation EMail :');
  let mailInput2 = createInput('mail','email2','emailInput2', 'emailInput textInput', '', 0, 35, 'Confirmation', '', '', emailContainer, 'required');
  createBreakline(emailContainer, 2);
  let mailCheckLabel = createLabel('nameMailCheckLabel','checkmailsLabel','clMailCheck cLabel', 'checkmailsInput', emailContainer, 'Check Mails ');
  let mailCheckInput = createInput('radio','checkmails','checkmailsInput', 'emailCheck radioInput', 'emailchecked', '', '', '', 'onclick','fCheckMail();', emailContainer, 'required');

  let phoneContainer = createContainer('phoneContainer','phoneContainer','phoneContainer container', form, '');
  let phoneLabel = createLabel('namePhoneLabel', 'idPhoneLabel', 'cPhoneLabel cLabel', 'phoneInput', phoneContainer, 'Phone Number : ');
  let phoneInput = createInput('tel', 'phoneInput', 'phoneInput', 'phoneInput textInput', '', 0, 10, 'Number', 'oninput', 'phonecheck(this)', phoneContainer, 'required');

  let programmingLanguagesCbContainer = createContainer('progLanguagedContainer','progLanguagedContainer','progLanguagedContainer container', form, '');
  let progLangLabel = createLabel('progLangLabel', 'progLangLabel', 'progLangLabel', '', programmingLanguagesCbContainer, 'Langages de Programmations en cours d\'apprentissage');
  createBreakline(programmingLanguagesCbContainer, 2);
  let programmingLanguagesArray = ['C','C++','C#','HTML','JS','CSS','PHP','Python'];
  generateCheckboxesByArray(programmingLanguagesArray, programmingLanguagesCbContainer);

  let languagesLevelContainer = createContainer('langLevelContainer','langLevelContainer','langLevelContainer container', form, '');
  let frenchLevelLabel = createLabel('nameFrenchLabel', 'idFrenchLabel', 'clFrenchLabel cLabel', 'frenchLevelInput', languagesLevelContainer, 'Niveau Français : ');
  let frenchLevelInput = createInput('range', 'frenchLevel', 'frenchLevelInput', 'clFrenchLevelInput rangeInput', 0, 0, 10, '', 'onchange', 'levelChangeUpdateSpan(this, frenchLevelSpan)', languagesLevelContainer, '');
  let frenchLevelSpan = createSpan('frenchLevelIndicator', 'frenchLevelSpan', 'clFrenchLevelSpan levelSpan', frenchLevelInput.value+' / 10', languagesLevelContainer);
  createBreakline(languagesLevelContainer, 1);
  let englishLevelLabel = createLabel('nameEnglishLabel', 'idEnglishLabel', 'clEnglishLabel cLabel', 'englishLevelInput', languagesLevelContainer, 'Niveau Anglais : ');
  let englishLevelInput = createInput('range', 'englishLevel', 'englishLevelInput', 'clEnglishLevelInput rangeInput', 0, 0, 10, '','onchange', 'levelChangeUpdateSpan(this, englishLevelSpan)', languagesLevelContainer, '');
  let englishLevelSpan = createSpan('englishLevelIndicator', 'englishLevelSpan', 'clEnglishLevelSpan levelSpan', englishLevelInput.value+' / 10', languagesLevelContainer);
  createBreakline(languagesLevelContainer, 1);
  let germanLevelLabel = createLabel('nameGermanLabel', 'idGermanLabel', 'clGermanLabel cLabel', 'germanLevelInput', languagesLevelContainer, 'Niveau Allemand : ');
  let germanLevelInput = createInput('range', 'germanLevel', 'germanLevelInput', 'clGermanLevelInput rangeInput', 0, 0, 10, '', 'onchange', 'levelChangeUpdateSpan(this, germanLevelSpan)', languagesLevelContainer, '');
  let germanLevelSpan = createSpan('germanLevelIndicator', 'germanLevelSpan', 'clGermanLevelSpan levelSpan', germanLevelInput.value+' / 10', languagesLevelContainer);
  createBreakline(languagesLevelContainer, 1);

  let fieldset_hobbies = createFieldset('fieldsetHobbies', 'fieldsetHobbies',form, 'HOBBIES');
  let jeux = ['HADES.png','WoWSL.jpg','RDR2.jpg','csgo.jpg','overwatch.jpg','minecraft.jpg','leagueoflegends.jpg'];
  let hobbyImageContainer = createContainer('hobbyImageContainer', 'hobbyImageContainer', 'hobbyImageContainer container', fieldset_hobbies, '');
  let hobbyContainer = createContainer('hobbyContainer','hobbyContainer','hobbyContainer container', fieldset_hobbies, '');
  let hobbySelector = createSelect('hobbySelector', 'hobbySelector', 'hobbySelector formSelector', 'onchange', 'changeImg(this, hobbyImageContainer)', hobbyContainer, 'multiple');
  let baseHobbyOption = createOption('baseHobby', 'baseHobby', 'baseHobby formOptionBase', 'baseHobby', 'Selectionnez un Jeu', 'selected');
  appendOptionToSelect(hobbySelector, baseHobbyOption);
  let optionsJeux = createOptions(jeux);
  appendOptionToSelect(hobbySelector, optionsJeux);

  let fieldset_diplomes = createFieldset('fieldsetDiplome', 'fieldsetDiplome', form, 'DIPLOMES');
  let diplomes = ['BAC GENERAL','BAC TECHNOLOGIQUE','BTS','DUT','BACHELOR','MASTER'];
  let diplomeContainer = createContainer('diplomeContainer', 'diplomeContainer','diplomeContainer container', fieldset_diplomes, '');
  let diplomeSelector = createSelect('diplomeSelector', 'diplomeSelector', 'diplomeSelector formSelector', 'onchange', 'console.log("DIPLOME CHANGED")', diplomeContainer, 'multiple');
  let baseDiplomeOption = createOption('baseDiplome','baseDiplome','baseDisplome formOptionBase', 'baseDiplome', 'Selectionnez un Diplome', 'selected');
  appendOptionToSelect(diplomeSelector, baseDiplomeOption);
  let optionsDiplomes = createOptions(diplomes);
  appendOptionToSelect(diplomeSelector, optionsDiplomes);

  let fieldset_validation = createFieldset('fieldsetValidation', 'fieldsetValidation', form, 'VALIDATION');
  let submitButton = createInput('button', 'formSubmit', 'formSubmitButton', 'formSubmitButton btn', 'submitForm', null, null, '', 'onclick', 'validate_form();', fieldset_validation, '');
  let resetButton = createInput('reset', 'formReset', 'formResetButton', 'formResetButton btn', 'resetForm', null, null, '', 'onclick', 'window.location="#";', fieldset_validation, '');

  body.appendChild(form);
}

function fCheckMail(){
  var m1 = document.querySelector('#emailInput1');
  var m2 = document.querySelector('#emailInput2');
  console.log(m1);
  console.log(m2);
  if(m1.value != m2.value){
    m2.value = m1.value;
  }
  this.disabled = true;
}

function createContainer(cname, cid, cclass, ctargetParent, style){
  var container = document.createElement('div');
  container.setAttribute('name',cname);
  container.setAttribute('id',cid);
  container.setAttribute('class',cclass);
  container.setAttribute('style',style);

  ctargetParent.appendChild(container);
  return container;
}

function createFieldset(fid, fclass, parent, legendTextNode){
  var fieldset = document.createElement('fieldset');
  fieldset.setAttribute('class', fclass+' fieldsetCat');
  fieldset.setAttribute('id', fid);

  var legend = document.createElement('legend');
  legend.setAttribute('class',fclass+'Legend fieldsetLegend');
  legend.setAttribute('id',fid+'Legend');

  var legendText = document.createTextNode(legendTextNode);

  legend.appendChild(legendText);
  fieldset.appendChild(legend);
  parent.appendChild(fieldset);

  return fieldset;
}

//NAME ID CLASS FOR TARGETPARENT
function createLabel(lname, lid, lclass, lfor, ltargetParent, text){
  var label = document.createElement('label');
  label.setAttribute('name',lname);
  label.setAttribute('id',lid);
  label.setAttribute('class',lclass);
  label.setAttribute('for',lfor);

  var labelText = document.createTextNode(text);
  label.appendChild(labelText);

  ltargetParent.appendChild(label);
  return label;
}

function createSpan(sname, sid, sclass, stextnode, stargetParent){
  //console.log(stargetParent);
  let newSpan = document.createElement('span');
  newSpan.setAttribute('name',sname);
  newSpan.setAttribute('id',sid);
  newSpan.setAttribute('class',sclass);
  let newSpanTextNode = document.createTextNode(stextnode);
  newSpan.appendChild(newSpanTextNode);

  stargetParent.appendChild(newSpan);
}

function createLink(lname, lid, lclass, lhref, ltextnode, ltargetParent){
  console.log(ltargetParent);
  let newLink = document.createElement('a');
  newLink.setAttribute('name',lname);
  newLink.setAttribute('id',lid);
  newLink.setAttribute('class',lclass);
  newLink.setAttribute('href',lhref);
  let newLinkTextNode = document.createTextNode(ltextnode);
  newLink.appendChild(newLinkTextNode);

  ltargetParent.appendChild(newLink);
  return newLink;
}

function levelChangeUpdateSpan(sender, spanObject){
  //console.log('SENDER OBJECT : '+sender);
  //console.log('SENDER ID : '+sender.id);
  //console.log('SENDER VALUE : '+sender.value);
  //console.log('SPAN OBJECT : '+spanObject);
  //console.log('SPAN ID : '+spanObject.id);
  //console.log('SPAN INNERHTML : '+spanObject.innerHTML);
  //console.log('SPAN VALUE : '+spanObject.value);
  spanObject.innerHTML = sender.value + ' / 10';
  if(sender.value < 4){
    spanObject.setAttribute('style','color: red;');
  }else{
    if(sender.value >= 4 && sender.value < 7){
      spanObject.setAttribute('style','color: yellow;');
    }else{
      if(sender.value >= 7){
        spanObject.setAttribute('style','color: green;');
      }
    }
  }
}

//TYPE NAME ID CLASS VALUE MINLENGTH MAXLENGTH PLACEHOLDER INTERACTION(event: onclick, onfocusout, [...]) ACTION(votre fonction) PARENTNODE
//minlength maxlength placeholder a laisser vide si ce n'est pas un input text
function createInput(itype, iname, iid, iclass, ivalue, min, max, iplaceholder, interaction, action, itargetParent, isrequired){
  var newInput = document.createElement('input');
  newInput.setAttribute('type',itype);
  newInput.setAttribute('name',iname);
  newInput.setAttribute('id',iid);
  newInput.setAttribute('class',iclass);
  newInput.setAttribute('value',ivalue);
  newInput.setAttribute('placeholder',iplaceholder);
  if(itype == 'text' || itype == 'tel'){
    newInput.setAttribute('minlength',min);
    newInput.setAttribute('maxlength',max);
  }else{
    if(itype == 'range'){
      newInput.setAttribute('min',min);
      newInput.setAttribute('max',max);
    }else{
      if(itype == 'email'){
        newInput.setAttribute('pattern','[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$');
      }
    }
  }
  if(interaction != ''){newInput.setAttribute(''+interaction+'',action);}
  if(isrequired == 'required'){newInput.setAttribute('required','');}

  itargetParent.appendChild(newInput);
  return newInput;
}

function generateCheckboxesByArray(array, parentContainer){
  array.forEach((checkboxesArray, iCheckbox) => {
    //console.log(checkboxesArray);
    //console.log(array[iCheckbox] + ' : ' + (iCheckbox+1));
    //LABEL: lname, lid, lclass, lfor, ltargetParent, text
    //INPUT: itype, iname, iid, iclass, ivalue, min, max, iplaceholder, interaction, action, itargetParent, required
    let checkboxLabel = createLabel('progLanguage_'+checkboxesArray+'', 'progLabelCB'+(iCheckbox+1)+'', 'progCheckboxLabel cLabel', 'progLanguage'+(iCheckbox+1)+'', parentContainer, 'Langage ' +array[iCheckbox]+ ' ');
    let checkbox = createInput('checkbox','progLanguage', 'progLanguage'+(iCheckbox+1)+'','progCheckbox checkboxInput', ''+array[iCheckbox]+'', null, null, '', 'onclick', 'console.log("'+array[iCheckbox]+'");', parentContainer, '');
    createBreakline(parentContainer, 1);
  })
}

function createSelect(sname, sid, sclass, sinteraction, saction, parent, ismultiple){
  var newSelect = document.createElement('select');
  newSelect.setAttribute('name',sname);
  newSelect.setAttribute('id',sid);
  newSelect.setAttribute('class',sclass);
  if(sinteraction != ''){newSelect.setAttribute(''+sinteraction+'',saction);}
  if(ismultiple == 'multiple'){newSelect.setAttribute('multiple','');}

  parent.appendChild(newSelect);

  return newSelect;
}

function appendOptionToSelect(select, option){
  if(Array.isArray(option)){
    for (var i = 0; i < option.length; i++) {
      select.appendChild(option[i]);
    }
  }else{
    select.appendChild(option);
  }
}

function createOption(oname, oid, oclass, ovalue, sTextNode, selected){
  let newOption = document.createElement('option');
  newOption.setAttribute('name',oname);
  newOption.setAttribute('id',oid);
  newOption.setAttribute('class',oclass);
  newOption.setAttribute('value',ovalue);
  if(selected == 'selected'){
    newOption.setAttribute('selected','');
  }
  let newOptionTextNode = document.createTextNode(sTextNode);
  newOption.appendChild(newOptionTextNode);
  return newOption;
}

function createOptions(array){
  var options = [];
  for (var i = 0; i < array.length; i++) {
    let optionData = array[i].split('.')[0];
    //console.log(optionData);

    var newOpt = createOption(''+optionData+'', ''+optionData+'', ''+optionData+' hobbyOption', ''+optionData+'', ''+optionData+'', '');
    options.push(newOpt);
  }

  //console.log(options);
  return options;
}

function changeImg(object, parent){
  let objectOptions = object.options;
  for (var i = 0; i < objectOptions.length; i++) {
    if(objectOptions[i].selected && document.querySelector('#'+objectOptions[i].value+'_img') == null){
      let newImage = document.createElement('img');
      newImage.setAttribute('src','../Images/'+objectOptions[i].value+'.png');
      newImage.setAttribute('class','displayedImage');
      newImage.setAttribute('id',''+objectOptions[i].value+'_img');
      newImage.setAttribute('alt','../Images/'+objectOptions[i].value+'');
      newImage.setAttribute('title',''+objectOptions[i].value+'');
      parent.appendChild(newImage);
    }else{
      if(document.querySelector('#'+objectOptions[i].value+'_img') != null){
        parent.removeChild(document.querySelector('#'+objectOptions[i].value+'_img'));
      }

    }
  }
}

function createDateToday(){
  var body = document.body;
  var today = new Date();

  var dateContainer = document.createElement('div');
  dateContainer.setAttribute('class','dateContainer');
  dateContainer.setAttribute('id','dateContainer');

  var displayer = document.createElement('h3');
  displayer.setAttribute('class','clDateDisplayer');
  displayer.setAttribute('id','idDateDisplayer');

  var displayerText = document.createTextNode('DATE : ' + today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear());

  displayer.appendChild(displayerText);
  dateContainer.appendChild(displayer);
  body.appendChild(dateContainer);
}

function phonecheck(numb){
var regx = /^[0-9]+$/;
  if(numb.value.match(regx))
  {
  }else{
    numb.value = "";
    //alert("Characters are not allowed");
  }
}

function createBreakline(parent, rep){
  for (var i = 0; i < rep; i++) {
    var br = document.createElement('br');
    parent.appendChild(br);
  }
}

function validation_form(){
  var ddn = document.querySelector('#ddnInput');
  console.log(ddn);
  console.log(ddn.value);
  console.log('VALID');
  let u_baseHobbyOption = document.querySelector('#baseHobby');
  console.log('Object Selected : ' + u_baseHobbyOption.selected);
  if(u_baseHobbyOption.selected){
    u_baseHobbyOption.style.color = "red";
    document.querySelector('#fieldsetHobbies').scrollIntoView();
  }
}

function validate_form(){
  let u_nom = document.querySelector('#nomInput'); //nom de famille
  let u_prenom = document.querySelector('#prenomInput'); //prenom
  let u_genre = get_checkedRadio('gender'); //gender
  let u_ddn = document.querySelector('#ddnInput');
  let u_email1 = document.querySelector('#emailInput1'); //email1
  let u_email2 = document.querySelector('#emailInput2'); //email2
  let u_baseHobbyOption = document.querySelector('#baseHobby');
  let can_submit = false;

  if(check_input(u_nom.value) && check_input(u_prenom.value) && ((parseInt(get_age(u_ddn.value),10) > 3) && (parseInt(get_age(u_ddn.value),10) < 100)) && u_email2.value == u_email1.value && !u_baseHobbyOption.selected)
  {
    can_submit = true;
  }else{
    can_submit = false;
    console.log('Un de vos champs sont incorrect, veuillez verifier vos saisies.');
    if(!check_input(u_nom))
    {
      u_nom.style.color = "red";
      u_nom.scrollIntoView();
    }else{
      u_nom.style.color = "green";
    }
    if(!check_input(u_prenom))
    {
      u_prenom.style.color = "red";
      u_prenom.scrollIntoView();
    }else{
      u_prenom.style.color = "green";
    }
    if(!((parseInt(get_age(u_ddn.value),10) > 3) && (parseInt(get_age(u_ddn.value),10) < 100)))
    {
      u_ddn.scrollIntoView();
      u_ddn.style.color = "red";
    }else{
      u_ddn.style.color = "green";
    }
    if(!u_email2.value != u_email1.value){
      u_email2.style.color = "red";
      u_email2.scrollIntoView();
      alert('Vos emails ne correspondent pas, cliquez sur le bouton radio !');
    }
    if(u_baseHobbyOption.selected){
      u_baseHobbyOption.style.color = "red";
      document.querySelector('#fieldsetHobbies').scrollIntoView();
    }
  }

  if(can_submit){
    let form = document.getElementById("informationForm").submit();
  }
}

function phonecheck(numb){
var regx = /^[0-9]+$/;
  if(numb.value.match(regx))
  {
  }else{
    numb.value = "";
    alert("Characters are not allowed");
  }
}

function get_age(date){
  const words = date.split('-');
  var dt = new Date();
  var current_year = dt.getYear() + 1900;

  var c_year_int = parseInt(current_year, 10);
  var c_bday_int = parseInt(words[0], 10);

  return c_year_int - c_bday_int;
}

function get_checkedRadio(elementName){
  let element = document.getElementsByName(elementName);
  for (var i = 0; i < element.length; i++) {
    if(element[i].checked){
      return element[i];
    }
  }
}

function check_input(input){
  var letters = /^[A-Za-z]+$/;
  if(input != undefined || input != '' && input.match(letters))
  {
    return true;
  }else{
    console.log(input + "is not a valid input !");
    return false;
  }
}

function initAPI(){
  console.log('Weact Creation API loaded successfully');
}

//cname, cid, cclass, ctargetParent, style
function createContainer(cname, cid, cclass, ctargetParent, style){
  var container = document.createElement('div');
  container.setAttribute('name',cname);
  container.setAttribute('id',cid);
  container.setAttribute('class',cclass);
  container.setAttribute('style',style);

  ctargetParent.appendChild(container);
  return container;
}

//fid, fclass, parent, legendTextNode
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

//lname, lid, lclass, lfor, ltargetParent, text
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

//sname, sid, sclass, stextnode, stargetParent
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

//lname, lid, lclass, lhref, ltextnode, ltargetParent
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

//TYPE NAME ID CLASS VALUE MINLENGTH MAXLENGTH PLACEHOLDER INTERACTION(event: onclick, onfocusout, [...]) ACTION(votre fonction) PARENTNODE
function createInput(itype, iname, iid, iclass, ivalue, min, max, iplaceholder, interaction, action, itargetParent, isrequired, step = 1){
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
      newInput.setAttribute('step',step);
    }
  }
  if(interaction != ''){newInput.setAttribute(''+interaction+'',action);}
  if(isrequired == 'required'){newInput.setAttribute('required','');}

  itargetParent.appendChild(newInput);
  return newInput;
}

//array, labelCommonClass, checkboxesCommonName, checkboxesCommonClass, checkboxesCommonInteraction, checkboxesCommonAction, parentContainer
function generateCheckboxesByArray(array, labelCommonClass, checkboxesCommonName, checkboxesCommonClass, checkboxesCommonInteraction, checkboxesCommonAction, parentContainer){
  array.forEach((checkboxesArray, indexCheckbox) => {
    //CREATE LABEL ARGS : NAME, ID, CLASS, FOR(target id), PARENT, TEXT
    let checkboxLabel = createLabel(''+checkboxesArray+'', ''+(indexCheckbox+1)+'', '', ''+(indexCheckbox+1)+'', parentContainer, '' +array[indexCheckbox]+ ' ');
    //CREATE INPUT ARGS : TYPE NAME ID CLASS VALUE MINLENGTH MAXLENGTH PLACEHOLDER INTERACTION(event: onclick, onfocusout, [...]) ACTION(votre fonction) PARENTNODE
    let checkbox = createInput('checkbox', checkboxesCommonName, ''+(indexCheckbox+1)+'',checkboxesCommonClass, ''+array[indexCheckbox]+'', null, null, checkboxesCommonInteraction, checkboxesCommonAction, '', parentContainer, '');
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

//select, option
function appendOptionToSelect(select, option){
  if(Array.isArray(option)){
    for (var i = 0; i < option.length; i++) {
      select.appendChild(option[i]);
    }
  }else{
    select.appendChild(option);
  }
}

//oname, oid, oclass, ovalue, sTextNode, selected)
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

//array
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

function createDateToday(containerClass, containerId, displayerClass, displayerId, parent){
  var today = new Date();

  var dateContainer = document.createElement('div');
  dateContainer.setAttribute('class',containerClass);
  dateContainer.setAttribute('id',containerId);

  var displayer = document.createElement('h3');
  displayer.setAttribute('class',displayerClass);
  displayer.setAttribute('id',displayerId);

  var displayerText = document.createTextNode('DATE : ' + today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear());

  displayer.appendChild(displayerText);
  dateContainer.appendChild(displayer);
  parent.appendChild(dateContainer);
}

//parent, rep
function createBreakline(parent, rep){
  for (var i = 0; i < rep; i++) {
    var br = document.createElement('br');
    parent.appendChild(br);
  }
}

//numb
function phonecheck(numb){
var regx = /^[0-9]+$/;
  if(numb.value.match(regx))
  {
  }else{
    numb.value = "";
    alert("Characters are not allowed");
  }
}

//elementName
function get_checkedRadio(elementName){
  let element = document.getElementsByName(elementName);
  for (var i = 0; i < element.length; i++) {
    if(element[i].checked){
      return element[i];
    }
  }
}

//input
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

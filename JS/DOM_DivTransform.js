

function init(){
  var body = document.body;
  var header = document.querySelector('#pageHeader');

  console.log("DIVTRANSFORM SUCCESSFULLY LOADED");
  let pageHeaderContainer = createContainer('headerContainer','headerContainer','headerContainer container', header, '');
  let pageHeaderTitle = createSpan('headerTitle', 'headerTitle', 'headerTitle', 'Transform Element | play with Sliders', pageHeaderContainer);
  let today = createDateToday('dateContainer container', 'dateContainer', 'clDateDisplayer', 'clDateDisplayer', body);
  let mainContainer = createContainer('mainContainer', 'mainContainer', 'mainContainer container', body, '');

  let tmpDiv = createContainer('tmpContainer','tmpContainer','tmpContainer container', mainContainer, '');
  let tmpSpan = createSpan('tmpSpan', 'tmpSpan', 'tmpSpan', 'Zone de test', tmpDiv);

  let elements = [
    {type:"range",name:"sliderBg", min:0, max:255, step:5},
    {type:"range",name:"sliderPad", min:0, max:30, step:5},
    {type:"range",name:"sliderHeight", min:0, max:200, step:5},
    {type:"range",name:"sliderWidth", min:0, max:200, step:5},
    {type:"range",name:"sliderArr", min:0, max:30, step:5},
    {type:"range",name:"sliderRot", min:0, max:180, step:5}
  ];

  /* TABLE CREATION */
  /*let table = createElem('table','transformTable', 'transformTable', 'transformTable tbl', '', '', '', mainContainer);*/
  elements.forEach((element, elemIndex) => {
    console.log(element.name);
    createInput(element.type, element.name, '', 'rangeInput', 0, element.min, element.max, '', 'oninput', 'changeDivProperties(this);', mainContainer, '', element.step);
  });
}

function changeValueDisplayer(displayer_id, value){
  document.querySelector('#'+displayer_id.id+'').innerHTML = value;
}

function changeDivProperties(event){
  let tmpContainer = document.querySelector('#tmpContainer');
  console.log(event);
  switch (event.name){
    case "sliderBg":
      tmpContainer.style.backgroundColor = 'rgb('+event.value+','+event.value+','+event.value+')'
      break;
    case "sliderPad":
      tmpContainer.style.padding = event.value+'px';
      break;
    case "sliderHeight":
      tmpContainer.style.height = event.value+'px';
      break;
    case "sliderWidth":
      tmpContainer.style.width = event.value+'px';
      break;
    case "sliderArr":
      tmpContainer.style.borderRadius = event.value+'px';
      break;
    case "sliderRot":
      tmpContainer.style.transform = 'rotate('+event.value+'deg)';
      break;
    default:
      break;
  }
}

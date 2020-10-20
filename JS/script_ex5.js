function init(){
  console.log("Page has been successfully loaded");
}

function generatePageTable(){
  var pages = ['Exercice1','Exercice2','Exercice3','Exercice4'];
  var body = document.getElementsByTagName('body')[0];

  var myTab = document.createElement("div");
  myTab.setAttribute('class','div-table');
  var myTabBody = document.createElement("div");
  myTabBody.setAttribute('class','div-table-body');
  document.body.appendChild(myTab);

  for (var i = 0; i < pages.length; i++) {
      var row = document.createElement("div");
      row.setAttribute('class','div-table-row');
      var trowText = document.createTextNode(pages[i]);
      row.appendChild(trowText);

      myTabBody.appendChild(row);
  }
  myTab.appendChild(myTabBody);
  body.appendChild(myTab);

  var selectPage = document.createElement('select');
  selectPage.setAttribute('class','pageSelect');
  myTab.appendChild(selectPage);

  var baseOption = document.createElement('option');
  baseOption.setAttribute('class','selectOptions');
  baseOption.value = "";
  baseOption.text = "Selectionnez un site";
  baseOption.setAttribute('selected','true');
  selectPage.appendChild(baseOption);

  for (var i = 0; i < pages.length; i++) {
    var optionSelect = document.createElement('option');
    optionSelect.setAttribute('class','selectOptions');
    optionSelect.value = pages[i]+".html";
    optionSelect.text = pages[i];
    selectPage.appendChild(optionSelect);
  }
  selectPage.setAttribute('onchange','window.location = this.value');
}

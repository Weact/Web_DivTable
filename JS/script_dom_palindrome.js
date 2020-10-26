  var body = document.getElementsByTagName('body')[0];
  var divContainer;

function init(){
  console.log("successfully loaded");
  divContainer = document.querySelector('#divcont');

  //SPAN CREATION TO DISPLAY IF TRUE OR FALSE Palindrome
  var systemMsg = document.createElement('span');
  systemMsg.setAttribute('id','iSystemMsg');
  systemMsg.setAttribute('class','cSystemMsg');
  var systemMsgText = document.createTextNode('');
  systemMsg.appendChild(systemMsgText);
  document.getElementsByTagName('body')[0].appendChild(systemMsg);

  //TYPE NAME ID CLASS VALUE MINLENGTH MAXLENGTH PLACEHOLDER INTERACTION ACTION PARENTNODE
  createInput('text','','btnPalindrome','btn_palindrome btn','', 0, 32,'Entrez le mot palindrome','onfocusout','if(this.value != ""){palindrome(this.value);}', divContainer);
}

function palindrome(input){
  var str = input.toUpperCase();
  console.log(str);

  var isPalindrome = true;
  for (var i = 0; i < str.length; i++) {
    if(str[i] != str[str.length-i-1])
    {
      isPalindrome = false;
      break;
    }
  }

  if(isPalindrome){
    var displayIsPalindrome = document.querySelector('#iSystemMsg');
    displayIsPalindrome.innerHTML = "CEST UN PALINDROME";
    displayIsPalindrome.setAttribute('style','color: green');
    //alert('CEST UN PALINDROME');
  }else{
    var displayIsPalindrome = document.querySelector('#iSystemMsg');
    displayIsPalindrome.innerHTML = "CE NEST PAS UN PALINDROME";
    displayIsPalindrome.setAttribute('style','color: red');
    //alert('CE NEST PAS UN PALINDROME');
  }

}

//TYPE NAME ID CLASS VALUE MINLENGTH MAXLENGTH PLACEHOLDER INTERACTION(event: onclick, onfocusout, [...]) ACTION(votre fonction) PARENTNODE
//minlength maxlength placeholder a laisser vide si ce n'est pas un input text
function createInput(itype, iname, iid, iclass, ivalue, min, max, iplaceholder, interaction, action, itargetParent){
  var newInput = document.createElement('input');
  newInput.setAttribute('type',itype);
  newInput.setAttribute('name',iname);
  newInput.setAttribute('id',iid);
  newInput.setAttribute('class',iclass);
  newInput.setAttribute('value',ivalue);
  if(itype == 'text'){
    newInput.setAttribute('placeholder',iplaceholder);
    newInput.setAttribute('minlength',min);
    newInput.setAttribute('maxlength',max);
  }
  if(interaction != null){newInput.setAttribute(''+interaction+'',action);}

  itargetParent.appendChild(newInput);
}

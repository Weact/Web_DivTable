const MAX = 99;
var luckyNumber = Math.floor(Math.random() * Math.floor(MAX));;
var timer;
//var timerValue = 0;
var timerValue;
var userhits = 0;
var is_game_running = false;
var is_game_finished = false;
var gamemode = 0;

function init()
{
  let uInput = document.querySelector('.uInput').disabled = true;
  let gSubmit = document.querySelector('.gSubmit').disabled = true;
  let gReset = document.querySelector('.gReset').disabled = true;
  console.log(luckyNumber);
  uInput.setAttribute('max',''+MAX+'');
  uInput.setAttribute('min','0');
}

function set_gamemode()
{
  let beatMode = document.querySelector('#game-gamemode-beat').checked;
  let trialMode = document.querySelector('#game-gamemode-trial').checked;
  let gamemode_displayer = document.querySelector('#gamemode_displayer');

  let uInput = document.querySelector('.uInput').disabled = false;
  let gReset = document.querySelector('.gReset').disabled = false;

  if(beatMode){
    gamemode = 1;
    gamemode_displayer.innerHTML = "SELECTED GAMEMODE : TIME BEAT";
  }else{
    if(trialMode){
      gamemode = 2;
      gamemode_displayer.innerHTML = "SELECTED GAMEMODE : TIME TRIAL";
    }
  }
}

function game_start()
{
  console.log(gamemode);
  if(!is_game_running && !is_game_finished)
  {
    let placeholder = document.querySelector('#timer-display').innerHTML = "GAME IS STARTING...";
    is_game_running = true;
    if(gamemode == 1){
      timerValue = 0;
      timer = setInterval(increase_timer, 1000);
      let gSubmit = document.querySelector('.gSubmit').disabled = false;
    }
    if(gamemode == 2){
      timerValue = 15;
      timer = setInterval(decrease_timer, 1000);
      let gSubmit = document.querySelector('.gSubmit').disabled = false;
    }

  }
}

function increase_timer()
{
  timerValue++;
  let timer = document.querySelector('#timer-display');
  timer.innerHTML = ''+timerValue+'.0s';
}
function decrease_timer()
{
  if(timerValue > 0){
    timerValue--;
    let timer = document.querySelector('#timer-display');
    timer.innerHTML = ''+timerValue+'.0s';
  }else{
    clearTimeout(timer);
    let submitButton = document.querySelector('.gSubmit').disabled = true;
    is_game_finished = true;
    is_game_running = false;
    let userhitsDisplayer = document.querySelector('#user-hits').innerHTML = userhits + " COUPS";
    let systemText = document.querySelector('#system-alert').innerHTML = "DOMMAGE<br>PARTIE TERMINEE :<br>5 secondes et "+userhits+" coups.";
    let uInput = document.querySelector('.uInput').disabled = true;
    clearTimeout(timer);
  }
}

function submit_answer()
{
  if(!is_game_finished)
  {
    console.log("SUBMIT WIP");
    let uInputVal = document.querySelector('.uInput').value;
    //console.log(uInputVal);
    if (uInputVal < luckyNumber) {
      userhits++;
      let systemText = document.querySelector('#system-alert').innerHTML = "PLUS";
      let userhitsDisplayer = document.querySelector('#user-hits').innerHTML = userhits + " COUPS";
    } else{
      if (uInputVal > luckyNumber) {
        userhits++;
        let systemText = document.querySelector('#system-alert').innerHTML = "MOINS";
        let userhitsDisplayer = document.querySelector('#user-hits').innerHTML = userhits + " COUPS";
      }else{
        is_game_finished = true;
        is_game_running = false;
        userhits++;
        let submitButton = document.querySelector('.gSubmit').disabled = true;
        let userhitsDisplayer = document.querySelector('#user-hits').innerHTML = userhits + " COUPS";
        if(gamemode == 1){
          let systemText = document.querySelector('#system-alert').innerHTML = "BRAVO<br>Vous avez fini en :<br>" +timerValue+" secondes et "+userhits+" coups.";
          let uInput = document.querySelector('.uInput').disabled = true;
        }
        if(gamemode == 2){
          let systemText = document.querySelector('#system-alert').innerHTML = "BRAVO<br>Vous avez fini avec :<br>"+timerValue+" secondes restantes et "+userhits+" coups.";
          let uInput = document.querySelector('.uInput').disabled = true;
        }

        clearTimeout(timer);
      }
    }
  }
}

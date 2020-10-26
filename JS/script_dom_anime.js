var timer;
var speed = 10;
var obstaclesArray = [];
var inter;
var inputs = [false, false, false, false];
var players = [{x:0,y:0,w:40,h:40}];
var obstacles = [
                  {x: 100, y: 100, w: 40, h: 40},
                  {x: 200, y: 200, w: 40, h: 40},
                  {x: 350, y: 350, w: 40, h: 40}
    ]


function init(){

  document.title = 'DOM Animated';

	var body = document.body;
  var gameContainer = createContainer('gameContainer', 'gameContainer', 'gameContainer', body, 'width: 500px; height: 500px;');
  var gameObject1 = createContainer('player1', 'player1', 'player gameObjects', gameContainer, 'width: '+players[0].w+'px; height: '+players[0].h+'px; top: '+players[0].x+'px; left: '+players[0].y+'px;');
  gameObject1.setAttribute('onclick','startMoving(this)');

  var gameObject2 = createContainer('gameObject2', 'gameObject2', 'gameObject2 obstacles gameObjects', gameContainer, 'width: '+obstacles[0].w+'px; height: '+obstacles[0].h+'px; top: '+obstacles[0].x+'px; left: '+obstacles[0].y+'px;');
  var gameObject3 = createContainer('gameObject3', 'gameObject3', 'gameObject3 obstacles gameObjects', gameContainer, 'width: '+obstacles[1].w+'px; height: '+obstacles[1].h+'px; top: '+obstacles[1].x+'px; left: '+obstacles[1].y+'px;');
  var gameObject4 = createContainer('gameObject4', 'gameObject4', 'gameObject4 obstacles gameObjects', gameContainer, 'width: '+obstacles[2].w+'px; height: '+obstacles[2].h+'px; top: '+obstacles[2].x+'px; left: '+obstacles[2].y+'px;');

  obstaclesArray = document.querySelectorAll('.obstacles');
  console.log(obstaclesArray);

  var parent_static_square = document.querySelector('#gameContainer');
	var child_movable_square = document.querySelector('#gameObject1');

  var btn = createInput('button','movebutton','movebutton', 'movebutton btn', 'Mouvement Player', '', '', '', 'onclick','move()', body);
  var spdSlider = createInput('range', 'speedChanger', 'speedChanger', 'slider_spdChanger', speed, 0, 20, '', 'onchange', 'speed = parseInt(this.value)', body, '', 10);
}

function startMoving(o){
       document.addEventListener("keypress", moveByArrows);
       document.addEventListener("keyup", moveByArrows);
       //console.log(obstaclesArray);
       if(!inter)
           inter = setInterval(function(){myMove(o)}, 30);
       else
       {
           clearInterval(inter);
           inter = null;
       }
   }

function myMove(o){
  if(inputs[0])
  {
    if(parseInt(o.style.left) < (parseInt(o.parentNode.style.width) - parseInt(o.style.width))){
      horizontalMove(players[0], o, speed);
    }else{
      horizontalMove(players[0], o, -speed);
    }
  }
  if(inputs[1])
  {
    if(parseInt(o.style.top) < (parseInt(o.parentNode.style.height) - parseInt(o.style.height))){
      verticalMove(players[0], o, speed);
    }else{
      verticalMove(players[0], o, -speed);
    }
  }
  if(inputs[2])
  {
    if(parseInt(o.style.top) > 0){
      verticalMove(players[0], o, -speed);
    }else{
      verticalMove(players[0], o, +speed);
    }
  }
  if(inputs[3])
  {
    if(parseInt(o.style.left) > 0){
      horizontalMove(players[0], o, -speed);
    }else{
      horizontalMove(players[0], o, speed);
    }
  }
  for (var i = 0; i < obstacles.length; i++) {
    if(collision(players[0], obstacles[i])){
      if(inputs[0]){horizontalMove(players[0], o, -speed);}
      if(inputs[1]){verticalMove(players[0], o, -speed);}
      if(inputs[2]){verticalMove(players[0], o, speed);}
      if(inputs[3]){horizontalMove(players[0], o, speed);}
    }
  }
  renderObject(players[0], o);
}

function moveByArrows(){
        if(event.type == "keypress")
        {
            if(event.key == 'd')
            {
                inputs[0] = true;
            }

            if(event.key == 's')
            {
                inputs[1] = true;
            }

            if(event.key == 'z')
            {
                inputs[2] = true;
            }

            if(event.key == 'q')
            {
                inputs[3] = true;
            }
        }
        if(event.type == "keyup")
        {
            if(event.key == 'd')
            {
                inputs[0] = false;
            }

            if(event.key == 's')
            {
                inputs[1] = false;
            }

            if(event.key == 'z')
            {
                inputs[2] = false;
            }

            if(event.key == 'q')
            {
                inputs[3] = false;
            }
        }
    }

function move(){
    var parent_static_square = document.querySelector('#gameContainer');
    var child_movable_square = document.querySelector('#player1');
    if(child_movable_square.offsetLeft <= parent_static_square.offsetWidth-child_movable_square.offsetWidth-1){
      if(child_movable_square.offsetTop <= parent_static_square.offsetHeight-child_movable_square.offsetHeight-1){
            child_movable_square.style.left = (child_movable_square.offsetLeft + speed) +'px';
                child_movable_square.style.top = (child_movable_square.offsetTop + speed) +'px';
      }else{
          clearInterval(timer);
       }
    }else{
      clearInterval(timer);
    }
		console.log('MOVE IS RUNNING');
}

function collision(playerInfos, obstacleInfo){
  //let side = "none";
  let is_colliding = false;

  if( (playerInfos.x + playerInfos.w >= obstacleInfo.x) &&
  (playerInfos.x <= obstacleInfo.x + obstacleInfo.w) &&
  (playerInfos.y + playerInfos.h >= obstacleInfo.y) &&
  (playerInfos.y <= obstacleInfo.y + obstacleInfo.h) ){
    is_colliding = true;
    console.log("colliding");
  }

  //return side;
  return is_colliding;
}

function horizontalMove(playerInfos, playerObject, value){
  playerInfos.x += value;
}
function verticalMove(playerInfos, playerObject, value){
  playerInfos.y += value;
}

function renderObject(objectInfos, object){
  object.style.left = objectInfos.x;
  object.style.top = objectInfos.y;
}

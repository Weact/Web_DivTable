var timer;
var speed = 10;
let obstaclesArray = [];

function init(){

  document.title = 'DOM Animated';

	var body = document.body;
  var gameContainer = createContainer('gameContainer', 'gameContainer', 'gameContainer', body, 'width: 500px; height: 500px;');
  var gameObject1 = createContainer('gameObject1', 'gameObject1', 'gameObject1 player gameObjects', gameContainer, 'width: 40px; height: 40px; top: 0px; left: 0px;');
  gameObject1.setAttribute('onclick','startMoving(this)');

  var gameObject2 = createContainer('gameObject2', 'gameObject2', 'gameObject2 obstacles gameObjects', gameContainer, 'width: 40px; height: 40px; top: 100px; left: 100px;');
  var gameObject3 = createContainer('gameObject3', 'gameObject3', 'gameObject3 obstacles gameObjects', gameContainer, 'width: 40px; height: 40px; top: 200px; left: 200px;');
  var gameObject4 = createContainer('gameObject4', 'gameObject4', 'gameObject4 obstacles gameObjects', gameContainer, 'width: 40px; height: 40px; top: 350px; left: 310px;');

  obstaclesArray = document.querySelectorAll('.obstacles');
  console.log(obstaclesArray);

  var parent_static_square = document.querySelector('#gameContainer');
	var child_movable_square = document.querySelector('#gameObject1');

	var btn = document.createElement('input');
	btn.setAttribute('type','button');
	btn.setAttribute('id','movebutton');
	btn.setAttribute('value','Bouger le carre');

	body.appendChild(btn);

	var spdSlider = document.createElement('input');
	spdSlider.setAttribute('type','range');
	spdSlider.setAttribute('min','0');
	spdSlider.setAttribute('max','20');
	spdSlider.setAttribute('step','10');
	spdSlider.setAttribute('value',''+speed+'');
	spdSlider.setAttribute('id','speedChanger');
	spdSlider.setAttribute('class','slider_spdChanger');

	body.appendChild(spdSlider);

	spdSlider.onchange = function(){
		console.log(speed);
		speed = parseInt(spdSlider.value);
		console.log(speed);
	};

	//var b = document.querySelector('#movebutton').addEventListener('click',startMoving(child_movable_square))

/*
	window.addEventListener("keydown",function(e){
		if(e.keyCode == 81){
			if(child_movable_square.offsetLeft > 0){
				console.log('Moved Left');
        for (var i = 0; i < speed; i++) {
          child_movable_square.style.left = (child_movable_square.offsetLeft - 1) + 'px';
        }
			}
		}
		if(e.keyCode == 68){
			if(child_movable_square.offsetLeft <= parent_static_square.offsetWidth - child_movable_square.offsetWidth - parseInt(speed)+1){
				console.log('Moved Right');
        for (var i = 0; i < speed; i++) {
          child_movable_square.style.left = (child_movable_square.offsetLeft + 1) + 'px';
        }

			}
		}
		if(e.keyCode == 90){
			if(child_movable_square.offsetTop > 1 + speed/2){
				console.log('Moved Top');
        for (var i = 0; i < speed; i++) {
          child_movable_square.style.top = (child_movable_square.offsetTop - 1) + 'px';
        }

			}
		}
		if(e.keyCode == 83){
			if(child_movable_square.offsetTop <= parent_static_square.offsetHeight - child_movable_square.offsetHeight - parseInt(speed)+1){
				console.log('Moved Bottom');
        for (var i = 0; i < speed; i++) {
          child_movable_square.style.top = (child_movable_square.offsetTop + 1) + 'px';
        }
			}
		}
	})
}
*/

}

let inter;
let inputs = [false, false, false, false];

function startMoving(o)
   {
       document.addEventListener("keypress", moveByArrows);
       document.addEventListener("keyup", moveByArrows);
       //console.log(obstaclesArray);
       if(!inter)
           inter = setInterval(function(){myMove(o, obstaclesArray)}, 30);
       else
       {
           clearInterval(inter);
           inter = null;
       }
   }


   function myMove(o, obstacles)
   {
      //console.log(o.parentNode);
      //console.log(o.parentNode.left);
      //console.log(o.parentNode.top);
      //console.log(o.parentNode.offsetLeft);
      //console.log(o.parentNode.offsetTop);
      //console.log(o.parentNode.offsetWidth);
      //console.log(o.parentNode.offsetHeight);

       if(inputs[0] && parseInt(o.style.left) < (parseInt(o.parentNode.style.width) - parseInt(o.style.width)))
       {
          o.style.left = (parseInt(o.style.left) + speed) + "px";
       }
       if(inputs[1] && parseInt(o.style.top) < (parseInt(o.parentNode.style.height) - parseInt(o.style.height)))
       {
          o.style.top = (parseInt(o.style.top) + speed) + "px";
       }
       if(inputs[2] && parseInt(o.style.top) > 0)
       {
          o.style.top = (parseInt(o.style.top) - speed) + "px";
       }
       if(inputs[3] && parseInt(o.style.left) > 0)
       {
          o.style.left = (parseInt(o.style.left) - speed) + "px";
       }
   }

   function moveByArrows()
    {
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
    var parent_static_square = document.querySelector('#mydiv');
    var child_movable_square = document.querySelector('#movable');
    if(child_movable_square.offsetLeft <= parent_static_square.offsetWidth-child_movable_square.offsetWidth-1){
      if(child_movable_square.offsetTop <= parent_static_square.offsetHeight-child_movable_square.offsetHeight-1){
            child_movable_square.style.left = (child_movable_square.offsetLeft + 1) +'px';
                child_movable_square.style.top = (child_movable_square.offsetTop + 1) +'px';
      }else{
          clearInterval(timer);
       }
    }else{
      clearInterval(timer);
    }
		console.log('MOVE IS RUNNING');
}

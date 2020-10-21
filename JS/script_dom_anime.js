var timer;
var speed = 0;

function init(){

  document.title = 'DOM Animated';

	var body = document.getElementsByTagName('body')[0];
	var parent_static_square = document.querySelector('#mydiv');
	var child_movable_square = document.querySelector('#movable');

	var btn = document.createElement('input');
	btn.setAttribute('type','button');
	btn.setAttribute('id','movebutton');
	btn.setAttribute('value','Bouger le carre');

	body.appendChild(btn);

	var spdSlider = document.createElement('input');
	spdSlider.setAttribute('type','range');
	spdSlider.setAttribute('min','0');
	spdSlider.setAttribute('max','100');
	spdSlider.setAttribute('step','10');
	spdSlider.setAttribute('value','0');
	spdSlider.setAttribute('id','speedChanger');
	spdSlider.setAttribute('class','slider_spdChanger');

	body.appendChild(spdSlider);

	spdSlider.onchange = function(){
		console.log(speed);
		speed = parseInt(spdSlider.value);
		console.log(speed);
	};

	var b = document.querySelector('#movebutton').addEventListener('click',function(){
	    timer = setInterval(move,1);
      //myMove();
	})

	window.addEventListener("keydown",function(e){
		if(e.keyCode == 81){
			if(child_movable_square.offsetLeft > 1 + speed/2){
				console.log('Moved Left');
				child_movable_square.style.left = (child_movable_square.offsetLeft - parseInt(speed)) + 'px';
			}
		}
		if(e.keyCode == 68){
			if(child_movable_square.offsetLeft <= parent_static_square.offsetWidth - child_movable_square.offsetWidth - parseInt(speed)+1){
				console.log('Moved Right');
				child_movable_square.style.left = (child_movable_square.offsetLeft + parseInt(speed)) + 'px';
			}
		}
		if(e.keyCode == 90){
			if(child_movable_square.offsetTop > 1 + speed/2){
				console.log('Moved Top');
				child_movable_square.style.top = (child_movable_square.offsetTop - parseInt(speed)) + 'px';
			}
		}
		if(e.keyCode == 83){
			if(child_movable_square.offsetTop <= parent_static_square.offsetHeight - child_movable_square.offsetHeight - parseInt(speed)+1){
				console.log('Moved Bottom');
				child_movable_square.style.top = (child_movable_square.offsetTop + parseInt(speed)) + 'px';
			}
		}
	})
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
/*
function myMove() {
  var elem = document.getElementById("movable"); //div qui bouge
  var parentDiv = document.getElementById("mydiv");
  var pos = 0;
  var id = setInterval(frame, 2);
  function frame() {
    if (pos == parentDiv.offsetWidth - elem.offsetWidth -1) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}
*/

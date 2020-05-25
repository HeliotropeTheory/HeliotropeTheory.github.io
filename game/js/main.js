window.onload = function(){
let canvas = document.getElementById("gameScreen");
var grid = document.getElementsByClassName("game");

//Objects//
var game = new Game();
var display = new Display(canvas);
var controller = new Controller();
var map =  new Map();

//Variables//
var map1 = map.create();

var mouseMove = function(event){
	display.draw(map1);
};


game.start();
display.draw('#f00');

canvas.addEventListener("mousemove",mouseMove);
}
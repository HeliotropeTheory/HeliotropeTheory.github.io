//var game;
//var controls;
window.onload = function(){
			var config = {
	type: Phaser.AUTO,
	scale: {
		//mode: Phaser.Scale.FIT,
		width: 800,
		height: 600,
		//min: {
			//width: 800,
			//height: 600,
		//}
	},
	
	physics: {
		default: 'arcade',
		arcade: {
			debug: false,
		}
	},
		
		//Parent set the DOM id of the game 
		//which allows the html file to referrence it.
		parent: 'phaser-game',
		scene: [ 
			SceneMainMenu,
			SceneMain,
			SceneGameOver
		]
		
		/*{
			preload: preload,
			create: create,
			update: update
		}*/
	};
	var game = new Phaser.Game(config);
}

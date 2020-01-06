class SceneMain extends Phaser.Scene{
	constructor(){
		super('SceneMain');
	}
	preload(){
		//Load resources 
		//this.load.image('tiles','images/tileset.png');
		//this.load.tilemapTiledJSON('map', 'maps/MapTest.json');
		
		//Load sprite images
		//this.load.spritesheet('slime','images/SlimeSprite.png', {frameWidth: 32, frameHeight: 32});
	}
	create(){
		console.log("Hello")
		//define our object
		//var map = this.make.tilemap({ key: 'map'});
		
		//var tiles = map.addTilesetImage('tileset', 'tiles');
		
		//var layer = map.createStaticLayer('Floor',tiles,0,0);
		
		//var layer = map.createStaticLayer('Walls',tiles,0,0);
		
		//this.cameras.main.setBounds(0,0,864,608);
		
		//var cursors = this.input.keyboard.createCursorKeys();
		
		//var controlConfig = {
		//	cameras: this.cameras.main,
		//	left: cursors.left,
		//	right: cursors.right,
		//	up: cursors.up,
		//	down: cursors.down,
		//	speed: 0.5
		//};
		
		//controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
		
		//Sprite Code!
		//var slimeAnim  = this.anims.create({
		//	key: 'walk',
		//	frames: this.anims.generateFrameNumbers('slime'),
		//	frameRate: 3,
		//	repeat: -1
		//});
		
		//var sprite = this.add.sprite(100,100,'slime');
		//var sprite = new Slime(this,100,100);
		//sprite.play('walk');
		
		
		//Path Code!
		//var path = new Phaser.Curves.Path(50, 0);
		
		//path.lineTo(50, 50);
		//path.splineTo([150, 525, 350, 70, 550, 525, 700, 70, 830, 530]);
		//path.lineTo(880,530); 
		
		//var stuff = this.add.follower(path,50,0,'slime');
		//stuff.startFollow({
		//	duration: 20000,
		//	yoyo:true,
		//	repeat: -1,
		//});
		//stuff.anims.play('walk');
		
		//Add Slimes on clicks
		//this.input.on('pointerdown', function(pointer){new Slime(this, pointer.x, pointer.y);}, this);
	}
	update(time, delta){
		//constant running loop
		controls.update(delta);
	}
}
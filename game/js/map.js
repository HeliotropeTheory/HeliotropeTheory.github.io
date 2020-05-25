const Map = function(){
	this.getTileByMouse = function(mouse){
		var t = new Map.Tile();
		return t;
	};
	
	this.create =  function(){
		var map = [];
		for (i=0; i < 48; i++){
			var t = new Map.Tile();
			map[i] = t;
		}
		return map;
	};

};

Map.prototype = {
	constructor : Map
};

Map.Tile = function(){
	this.x = 0;
	this.y = 0;
	this.color = '#00f';

};

Map.Tile.prototype = {
	constructor : Map.Tile,
	color: '#00f'
};
const Display = function(canvas){
this.ctx = canvas.getContext('2d');

//ctx.clear();

this.draw = function(m){
	this.ctx.clearRect(0,0,800,600);
	for (i=0; i < 48; i++){
		this.ctx.fillStyle = m[i].color;
		this.ctx.fillRect((i%8)*100, Math.floor(i/8)*100, 100, 100);
	}
};

};

Display.prototype = {
	constructor : Display
};
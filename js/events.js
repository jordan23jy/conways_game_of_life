var EventHandler = function(control) {
	this.control = control;
	// this.canvas = document.getElementById('game');
	this.canvas = $('#game');
	this.dragging = false;
};

EventHandler.prototype.init = function() {
	this.onclick();
};

EventHandler.prototype.onclick = function() {
	// set cell alive on click and when dragging

	var self = this;
	self.canvas.mousedown(function(event){
		var x = Math.floor(event.offsetX / self.control.grids.width);
		var y = Math.floor(event.offsetY / self.control.grids.height);

		self.control.getCell(x, y).isAlive = true;
		self.dragging = true
	})

	self.canvas.mousemove(function(event) {
		var x = Math.floor(event.offsetX / self.control.grids.width);
		var y = Math.floor(event.offsetY / self.control.grids.height);

		if (self.dragging) {
			self.control.getCell(x, y).isAlive = true;
		}

	})

	self.canvas.mouseup(function(event) {
		self.dragging = false;
	})
};
var events = new EventHandler(control);
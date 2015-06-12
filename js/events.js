var EventHandler = function(control) {
	this.control = control;
	// this.canvas = document.getElementById('game');
	this.canvas = $('#game');
	this.dragging = false;
};

EventHandler.prototype.init = function() {
	this.onclick();
	this.toggleControl();
	this.getSpeed();
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

// toggle control sidebar
EventHandler.prototype.toggleControl = function() {
	var menu = document.getElementById('menu');
	var sidebar = document.getElementById('sidebar');
	var main = document.getElementById('main');

	menu.addEventListener('click', function(e) {
	  sidebar.classList.toggle('toggled');
	  main.classList.toggle('toggled');
	  e.stopPropagation();
	});
}

EventHandler.prototype.getSpeed = function() {

	var self = this;
	var speedOptions = document.getElementById('speed').options;
	var selectedIndex = speedOptions.selectedIndex;
	var selectedSpeed = speedOptions[selectedIndex].value;
	var speed = document.querySelector('option');

	return selectedSpeed;
}

var events = new EventHandler(control);
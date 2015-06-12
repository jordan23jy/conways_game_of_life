var EventHandler = function(control) {
	this.control = control;
	// this.canvas = document.getElementById('game');
	this.canvas = $('#game');
	this.dragging = false;
	this.gameStarted = false;
};

EventHandler.prototype.init = function() {
	this.onClickRenderCell();
	this.toggleControl();
	this.getSpeed();
	this.toggleStartGame();
};

// set cell alive on click and when dragging
EventHandler.prototype.onClickRenderCell = function() {
	var self = this;

	self.canvas.mousedown(function(event){
		var x = Math.floor(event.offsetX / self.control.grids.width);
		var y = Math.floor(event.offsetY / self.control.grids.height);

		self.control.getCell(x, y).isAlive = true;
		self.dragging = true;
	});

	self.canvas.mousemove(function(event) {
		var x = Math.floor(event.offsetX / self.control.grids.width);
		var y = Math.floor(event.offsetY / self.control.grids.height);

		if (self.dragging) {
			self.control.getCell(x, y).isAlive = true;
		}
	});

	self.canvas.mouseup(function(event) {
		self.dragging = false;
	});
};

EventHandler.prototype.toggleStartGame = function() {
	var self = this;
	var buttonStart = document.getElementById('start');

	// click event
	buttonStart.addEventListener('click', function(event) {
		self.gameStarted = !self.gameStarted;
		self.buttonClassToggle();
	});

	// spacebar event
	window.addEventListener('keydown', function(event) {
		if (event.keyCode === 32) {
			event.preventDefault();
			self.gameStarted = !self.gameStarted;
			self.buttonClassToggle();
		}
	});
};

// switch button start/stop
EventHandler.prototype.buttonClassToggle = function() {
	var buttonStart = document.getElementById('start');
	if (this.gameStarted) {
		buttonStart.classList.remove("btn-success");
		buttonStart.classList.add("btn-danger");
		buttonStart.innerHTML = "Stop";
	} else {
		buttonStart.classList.remove("btn-danger");
		buttonStart.classList.add("btn-success");
		buttonStart.innerHTML = "Start";
	}
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
};

// get speed selected by user
EventHandler.prototype.getSpeed = function() {
	var self = this;
	var speedOptions = document.getElementById('speed').options;
	var selectedIndex = speedOptions.selectedIndex;
	var selectedSpeed = speedOptions[selectedIndex].value;
	var speed = document.querySelector('option');

	return selectedSpeed;
};


var events = new EventHandler(control);
var Engine = (function(global) {

	var doc   = global.document,
	win       = global.window,
	canvas    = doc.getElementById('game'),
	ctx       = canvas.getContext('2d'),
	gameSpeed = 0.5,
	self      = this,
	lastTime,
	timeElapsed;

	// ensure requestAnimationFrame works in several browsers
	win.requestAnimationFrame = win.requestAnimationFrame ||
	                            win.webkitRequestAnimationFrame ||
	                            win.mozRequestAnimationFrame ||
	                            win.oRequestAnimationFrame ||
	                            win.msRequestAnimationFrame;

	var CELL_WIDTH = 20,
	CELL_HEIGTH    = 20,
	NO_COLS        = 40,
	NO_ROWS        = 40,
	GRID_HEIGHT    = CELL_HEIGTH * NO_ROWS,
	GRID_WIDTH     = CELL_WIDTH * NO_COLS;

	canvas.height  = GRID_HEIGHT + 1;
	canvas.width   = GRID_WIDTH + 1;



	function main() {
		// get time delta
		var now = Date.now(),
		dt = (now - lastTime) / 1000.0;

		// update data first then clear canvas and render canvas again
		update(dt);
		clear();
		render(ctx);

		lastTime = now;
		win.requestAnimationFrame(main);
	}

	function init() {
		// set time on start to get time delta
		lastTime = Date.now();
		grids.init();
		events.init();
		main();
	}

	function update(dt) {

		// only start when gameStarted is true
		if (!events.gameStarted) {
			return;
		}
		// update according to set speed by user
		timeElapsed += dt;
		if (timeElapsed < gameSpeed) {
			return;
		} else {
			timeElapsed = 0;
		}

		updateEntities();
	}

	function updateEntities() {
		control.update();
		setSpeed();
	}

	function render(ctx) {
		renderEntities(ctx);
	}

	function renderEntities(ctx) {
		grids.render(ctx);
	}

	function clear() {
		ctx.fillStyle = this.background;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function restart() {

	}

	function setSpeed() {
		gameSpeed = events.getSpeed();
	}

	init();

})(this);
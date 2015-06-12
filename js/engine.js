var Engine = (function(global) {
	var doc = global.document,
	win = global.window,
	canvas = doc.getElementById('game'),
	ctx = canvas.getContext('2d'),
	self = this,
	lastTime;



	self.background = 'grey';

	var CELL_WIDTH = 20,
			CELL_HEIGTH = 20,
			NO_COLS = 20,
			NO_ROWS = 20,
			GRID_HEIGHT = CELL_HEIGTH * NO_ROWS,
			GRID_WIDTH = CELL_WIDTH * NO_COLS;

			canvas.height = GRID_HEIGHT + 1;
			canvas.width = GRID_WIDTH + 1;


	var grids = new Grids(NO_ROWS, NO_COLS, CELL_WIDTH, CELL_HEIGTH);
	var control = new Control(grids);
	var events = new EventHandler(control);

	function main() {
		var now = Date.now(),
		dt = (now - lastTime) / 1000.0;

		update(dt);
		clear();
		render(ctx);

		lastTime = now;
		// console.log("hello");

		win.requestAnimationFrame(main);
	}

	function init() {
		lastTime = Date.now();
		grids.init();
		events.init();
		main();

		/*========== test ==========*/
		control.getCell(1,1).isAlive = true;
		control.getCell(1,2).isAlive = true;
		control.getCell(1,3).isAlive = true;
		// control.getCell(2,1).isAlive = true;
		// control.getCell(2,2).isAlive = true;
	}

	function update(dt) {
		updateEntities(dt);
	}

	function updateEntities(dt) {
		control.update(dt);
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

	init();

})(this);
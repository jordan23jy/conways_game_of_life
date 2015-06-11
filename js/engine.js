var Engine = (function(global) {
	var doc = global.document,
	win = global.window,
	canvas = doc.getElementById('game'),
	ctx = canvas.getContext('2d'),
	self = this,
	lastTime;

	canvas.height = 800;
	canvas.width = 800;

	self.background = 'grey';

	var CELL_WIDTH = 20,
			CELL_HEIGTH = 20,
			NO_COLS = 10,
			NO_ROWS = 10,
			MATRIX_HEIGTH = CELL_HEIGTH * NO_ROWS,
			MATRIX_WIDTH = CELL_WIDTH * NO_COLS;


	var grids = new Grids(NO_ROWS, NO_COLS, CELL_WIDTH, CELL_HEIGTH);
	var control = new Control(grids);

	function main() {
		var now = Date.now(),
		dt = (now - lastTime) / 1000.0;

		update();
		clear();
		render(ctx);

		lastTime = now;
		// console.log("hello");

		win.requestAnimationFrame(main);
	}

	function init() {
		lastTime = Date.now();
		grids.init();
		main();

		/*========== test ==========*/
		control.getCell(1,1).isAlive = true;
	}

	function update() {

	}

	function updateEntities() {

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
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

	function main() {
		var now = Date.now(),
		dt = (now - lastTime) / 1000.0;

		update();
		clear();
		render();

		lastTime = now;
		console.log("hello");

		win.requestAnimationFrame(main);
	}

	function init() {
		lastTime = Date.now();
		main();
	}

	function update() {

	}

	function updateEntities() {

	}

	function render() {

	}

	function renderEntities() {

	}

	function clear() {
		ctx.fillStyle = this.background;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function restart() {

	}

	init();

})(this);
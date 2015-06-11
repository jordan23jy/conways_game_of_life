var CELL_WIDTH = 20,
		CELL_HEIGTH = 20,
		NO_COLS = 10,
		NO_ROWS = 10,
		MATRIX_HEIGTH = CELL_HEIGTH * NO_ROWS,
		MATRIX_WIDTH = CELL_WIDTH * NO_COLS;

var Grids = function(x, y, numRows, numCols, width, height) {
	this.x = x;
	this.y = y;
	this.numRows = numRows;
	this.numCols = numCols;
	this.width = width;
	this.height = height;

	this.gridBackground = 'lightgrey';
	this.cellColour = 'green';
	this.cells = [];
};

Grids.prototype.init = function() {
	var self = this;
	for (var i = 0; i < this.numRows * this.numCols; i++) {
			var x = i % this.numCols;
			var y = Math.floor(i/this.numCols);
			this.cells[i] = new Cell(x, y);
	}
};

Grids.prototype.render = function(ctx) {
	var self = this;

	ctx.fillStyle = 'white';
	ctx.fillRect(0, 0, self.numCols * self.width, self.numRows * self.height);

	// draw column;
	for (var i = 0; i < self.numCols; i++) {
		ctx.beginPath();
		ctx.moveTo(i*self.width,0);
		ctx.lineTo(i*self.width, self.height*self.numRows);
		ctx.stroke();
	}

	// draw rows;
	for (var j = 0; j < self.numRows; j++) {
		ctx.beginPath();
		ctx.moveTo(0, j*self.height);
		ctx.lineTo(self.width*self.numCols, j*self.height);
		ctx.stroke();
	}
}




var grids = new Grids(0, 0, NO_ROWS, NO_COLS, CELL_WIDTH, CELL_HEIGTH);
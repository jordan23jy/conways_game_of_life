var Grids = function(numRows, numCols, width, height) {
	this.numRows = numRows;
	this.numCols = numCols;
	this.width = width;
	this.height = height;
	this.canvasWidth = numCols * width;
	this.canvasHeight = numRows * height;

	this.gridBackground = '#faf8ef';
	this.aliveCellColour = 'green';
	this.cellsArray = [];
};

Grids.prototype.init = function() {
	var self = this;
	for (var i = 0; i < this.numRows * this.numCols; i++) {
			var x = i % this.numCols;
			var y = Math.floor(i/this.numCols);
			this.cellsArray[i] = new Cell(x, y, self.numCols, self.numRows);
	}
};

Grids.prototype.render = function(ctx) {
	var self = this;
	/*========== render grid lines ==========*/
	ctx.fillStyle = this.gridBackground;
	ctx.fillRect(0, 0, self.canvasWidth, self.canvasHeight);

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

	/*========== render alive cells ==========*/
	ctx.fillStyle = self.aliveCellColour; //=> render green for alive cells
	var livingCells = self.cellsArray.filter(function(cells) {
		return cells.isAlive;
	});

	livingCells.forEach(function(cell) {
		ctx.fillRect(cell.x * self.width, cell.y * self.height, self.width, self.height);
	})
};

/*========== CELL ==========*/
var Cell = function(x, y) {
	this.x = x;
	this.y = y;
	this.isAlive = false;
};

var CELL_WIDTH = 20,
		CELL_HEIGTH = 20,
		NO_COLS = 40,
		NO_ROWS = 40,
		GRID_HEIGHT = CELL_HEIGTH * NO_ROWS,
		GRID_WIDTH = CELL_WIDTH * NO_COLS;
var grids = new Grids(NO_ROWS, NO_COLS, CELL_WIDTH, CELL_HEIGTH);

var Grids = function(numRows, numCols, width, height) {
	this.numRows = numRows;
	this.numCols = numCols;
	this.width = width;
	this.height = height;

	this.gridBackground = 'lightgrey';
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

	/*========== render alive cells ==========*/
	ctx.fillStyle = self.aliveCellColour;
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
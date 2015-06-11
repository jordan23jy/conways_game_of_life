var Control = function(grids) {
	this.grids = grids;
};

Control.prototype.alive = function() {

};

Control.prototype.getCell = function(x, y) {
	// cells that exceed the matrix will start out the other end
	x = (x + this.grids.numCols) % this.grids.numCols;
	y = (y + this.grids.numCols) % this.grids.numRows;
	return this.grids.cellsArray[x + y * this.grids.numCols];
};

Control.prototype.getSurroundings = function(x,y) {
	return [
		this.getCell(x-1, y-1),
		this.getCell(x-1, y),
		this.getCell(x-1, y+1),
		this.getCell(x, y-1),
		this.getCell(x, y+1),
		this.getCell(x+1, y-1),
		this.getCell(x+1, y),
		this.getCell(x+1, y+1)
	];
};

Control.prototype.shouldLive = function() {
	var surroundings = this.getSurroundings();
	var surroundingAlive = surroundings.filter(function(cell) {
		return cell.isAlive;
	});

	if (surroundingAlive.length === 3) {
		return true;
	}
	return false;
};

Control.prototype.shouldDie = function() {
	var surroundings = this.getSurroundings();
	var surroundingAlive = surroundings.filter(function(cell) {
		return cell.isAlive;
	});

	// death by under-population
	if (surroundingAlive.length < 2) {
		return true;
	}
	// death by over-population
	if (surroundingAlive.length > 3) {
		return true;
	}

	return false;
};

// Control.prototype.setCellAlive = function(x, y) {
// 	this.getCell(x, y).isAlive = true;
// }
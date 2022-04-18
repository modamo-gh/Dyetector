class Dot {
	constructor(x, y, diameter) {
		this.x = x;
		this.y = y;
		this.diameter = diameter;
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.isDifferent = false;
	}

	draw() {
		fill(this.r, this.g, this.b);
		circle(this.x, this.y, this.diameter);
	}

	getIsDifferent() {
		return this.isDifferent;
	}

	getRadius() {
		return this.diameter / 2;
	}

	getX() {
		return this.x;
	}

	getY() {
		return this.y;
	}

	setColor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	setIsDifferent(parity) {
		this.isDifferent = parity;
	}
}

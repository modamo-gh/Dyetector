const dots = [];

function setup() {
	createCanvas(displayWidth, displayHeight);

	for (let i = 0; i < 3; i++) {
		const x = (displayWidth * (i + 1)) / 4;
		const y = displayHeight / 2;
		const diameter = displayWidth * 0.2;

		dots[i] = new Dot(x, y, diameter);
	}
}

function draw() {
	background(220);

	for (const dot of dots) {
		dot.draw();
	}
}

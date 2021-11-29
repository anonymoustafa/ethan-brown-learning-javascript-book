$(document).ready(function () {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	//TODO
	var c = Shape.Circle(200, 200, 55);
  c.fillColor = 'green';
	paper.view.draw();
});
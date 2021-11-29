/// <reference path="./typings/globals/jquery/index.d.ts" />

$(document).ready(function () {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById("mainCanvas"));
	// var c = Shape.Circle(200,200,80);
	// c.fillColor = 'yellow';
	// var text = new PointText(200,200);
	// text.justification = 'center';
	// text.fillColor = 'black';
	// text.fontSize = 15;
	// text.content = 'Hello World!';
	var tool = new Tool();
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x,event.point.y,20);
		c.fillColor = 'red';
	};
	paper.view.draw();
});
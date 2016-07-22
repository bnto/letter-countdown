'use strict';

window.onload = function () {

	var randomLetter = function randomLetter() {
		return Math.random().toString(36).slice(2, 3);
	};

	var letters = document.getElementById('js-lettercdwn').innerHTML;
	var element = document.getElementById('js-lettercdwn');

	var output = document.getElementById('js-lettercdwn').innerHTML;
	output = output.split('');

	// init letters
	for (var i = 0; i < letters.length; i++) {
		if (letters[i] == ' ') {
			output[i] = ' ';
		} else {
			output[i] = randomLetter();
		}
	}

	// set interval
	var cd = setInterval(function () {
		for (var _i = 0; _i < letters.length; _i++) {
			if (output[_i] != letters[_i]) {
				output[_i] = randomLetter();
			}
		}
		element.innerHTML = output.join('');
		if (output == letters) {
			clearInterval(cd);
		}
	}, 50);
};

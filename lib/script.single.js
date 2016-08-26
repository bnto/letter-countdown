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
	for (var _i = 0; _i < letters.length; _i++) {
		if (letters[_i] == ' ') {
			output[_i] = ' ';
		} else {
			output[_i] = ' ';
		}
	}

	// set interval
	var i = 0;
	var cd = setInterval(function () {
		if (output[i] != letters[i]) {
			output[i] = randomLetter();
		} else {
			i++;
		}

		element.innerHTML = output.join('');
		if (output == letters) {
			clearInterval(cd);
		}
	}, 10);
};

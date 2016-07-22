window.onload = function(){


let randomLetter = () => Math.random().toString(36).slice(2,3);


const letters = document.getElementById('js-lettercdwn').innerHTML;
let element = document.getElementById('js-lettercdwn');


let output = document.getElementById('js-lettercdwn').innerHTML;
output = output.split('');


// init letters
for (let i = 0; i < letters.length; i++){
	if (letters[i] == ' '){
		output[i] = ' ';
	} else {
		output[i] = randomLetter();
	}
}

// set interval
let cd = setInterval(() => {
	for (let i = 0; i < letters.length; i++){
		if (output[i] != letters[i]){
			output[i] = randomLetter();
		}
	}
	element.innerHTML = output.join('');
	if (output == letters) {
		clearInterval(cd);
	}
}, 50);

}
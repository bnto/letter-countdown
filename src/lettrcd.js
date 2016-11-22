/**
	lettrcd.js */

import {
	randomLetter,
	getElements
} from './core'

const defaults = {
	characters: 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
	exclude: [' '],
	speed: 50
}


/**
	Usage:
	lettrcd(<elements>, [options]) */

class Lettrcd {
	constructor(elements, options) {
		this.options = defaults
		this.elements = getElements(elements)
		this.running = false
	}

	spit(){
		console.log(this)
		return this
	}
}

// const lettrcd = new Lettrcd('h1')
// document.write(lettrcd.elements)
// console.log(lettrcd)

export default (elements, options) => new Lettrcd(elements, options)



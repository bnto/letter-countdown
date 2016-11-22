/*
	core.js */


export function randomLetter() {
	return Math.random().toString(36).slice(2,3)
}

export function getElements(obj) {
	return document.querySelectorAll(obj)[0].innerHTML
}
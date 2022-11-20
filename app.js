"use-strict";
const zero = document.querySelector(".zero");
const mul = document.querySelector(".mul");

const box1 = document.querySelector(".item-1");
const box2 = document.querySelector(".item-2");
const box3 = document.querySelector(".item-3");
const box4 = document.querySelector(".item-4");
const box5 = document.querySelector(".item-5");
const box6 = document.querySelector(".item-6");
const box7 = document.querySelector(".item-7");
const box8 = document.querySelector(".item-8");
const box9 = document.querySelector(".item-9");

let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
let filled = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let isLeft = 9;
let isZero = false;

boxes.forEach((box, i) => {
	box.addEventListener("click", () => {
		if (!filled.includes(0)) return;
		filled[i] = 1;
		isLeft--;
		const pointerClass = document.querySelector(`.zero-${i + 1}`);
		pointerClass.style.display = "block";
		console.log(filled);
		console.log(isLeft);
		for (let i = 0; i < filled.length && isLeft > 0; i++) {
			if (filled[i] === 0) {
				filled[i] = 2;
				isLeft--;
				console.log(filled);
				console.log(isLeft);
				document.querySelector(`.mul-${i + 1}`).style.display = "block";
				return;
			}
		}
	});
});

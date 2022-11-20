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

// 0 - not filled
// 1 - filled by O
// 2 -filled by X
let filled = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let isLeft = 9;
let isZero = false;
let winner = 0;

const playComputer = function () {
	setTimeout(() => {
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
	}, 400);
};

const printWinner = function (val) {
	if (val === 1) {
		console.log("O won");
		isLeft = 0;
	} else if (val === 2) {
		console.log("X won");
		isLeft = 0;
	}
};

const checkWin = function () {
	if (filled[0] === filled[1] && filled[1] === filled[2])
		printWinner(filled[0]);
	else if (filled[3] === filled[4] && filled[4] === filled[5])
		printWinner(filled[3]);
	else if (filled[6] === filled[7] && filled[7] === filled[8])
		printWinner(filled[6]);
	else if (filled[0] === filled[3] && filled[3] === filled[6])
		printWinner(filled[0]);
	else if (filled[2] === filled[5] && filled[5] === filled[8])
		printWinner(filled[2]);
	else if (filled[1] === filled[4] && filled[4] === filled[7])
		printWinner(filled[1]);
	else if (filled[0] === filled[4] && filled[4] === filled[8])
		printWinner(filled[0]);
	else if (filled[2] === filled[4] && filled[4] === filled[6])
		printWinner(filled[2]);
};

boxes.forEach((box, i) => {
	box.addEventListener("click", () => {
		if (isLeft === 0) return;
		filled[i] = 1;
		isLeft--;
		const pointerClass = document.querySelector(`.zero-${i + 1}`);
		pointerClass.style.display = "block";
		console.log(filled);
		console.log(isLeft);
		checkWin();
		if (isLeft === 0) return;
		playComputer();
		checkWin();
		if (isLeft === 0) return;
	});
});

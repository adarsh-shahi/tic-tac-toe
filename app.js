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

const playComputerEasy = function () {
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

const playComputerImpossiblePlace = function (a, b, c) {
	if (filled[a] === 0 && filled[b] !== 0 && filled[c] !== 0) return a;
	if (filled[a] !== 0 && filled[b] === 0 && filled[c] !== 0) return b;
	if (filled[a] !== 0 && filled[b] !== 0 && filled[c] === 0) return c;
};

const findTwoInWinPosition = function (val) {
	if (
		filled[0] + filled[1] + filled[2] === 2 * val &&
		(val === 1
			? filled[0] !== 2 && filled[1] !== 2 && filled[2] !== 2
			: filled[0] !== 1 && filled[1] !== 1 && filled[2] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(0, 1, 2);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[3] + filled[4] + filled[5] === 2 * val &&
		(val === 1
			? filled[3] !== 2 && filled[4] !== 2 && filled[5] !== 2
			: filled[3] !== 1 && filled[4] !== 1 && filled[5] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(3, 4, 5);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[6] + filled[7] + filled[8] === 2 * val &&
		(val === 1
			? filled[6] !== 2 && filled[7] !== 2 && filled[8] !== 2
			: filled[6] !== 1 && filled[7] !== 1 && filled[8] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(6, 7, 8);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[0] + filled[3] + filled[6] === 2 * val &&
		(val === 1
			? filled[0] !== 2 && filled[3] !== 2 && filled[6] !== 2
			: filled[0] !== 1 && filled[3] !== 1 && filled[6] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(0, 3, 6);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[2] + filled[5] + filled[8] === 2 * val &&
		(val === 1
			? filled[2] !== 2 && filled[5] !== 2 && filled[8] !== 2
			: filled[2] !== 1 && filled[5] !== 1 && filled[8] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(2, 5, 8);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[1] + filled[4] + filled[7] === 2 * val &&
		(val === 1
			? filled[1] !== 2 && filled[4] !== 2 && filled[7] !== 2
			: filled[1] !== 1 && filled[4] !== 1 && filled[7] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(1, 4, 7);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[0] + filled[4] + filled[8] === 2 * val &&
		(val === 1
			? filled[0] !== 2 && filled[4] !== 2 && filled[8] !== 2
			: filled[0] !== 1 && filled[4] !== 1 && filled[8] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(0, 4, 8);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	} else if (
		filled[2] + filled[4] + filled[6] === 2 * val &&
		(val === 1
			? filled[2] !== 2 && filled[4] !== 2 && filled[6] !== 2
			: filled[2] !== 1 && filled[4] !== 1 && filled[6] !== 1)
	) {
		const placeIndex = playComputerImpossiblePlace(2, 4, 6);
		console.log("ok " + placeIndex);
		filled[placeIndex] = 2;
		document.querySelector(`.mul-${placeIndex + 1}`).style.display = "block";
		return true;
	}
	return false;
};

const playComputerImpossible = function () {
	if (findTwoInWinPosition(2)) {
		// find 2 in continue and win - computer
		isLeft--;
		return;
	}
	if (findTwoInWinPosition(1)) {
		isLeft--;
		return; // find 2 of opponent in continue and block - computer
	}

	if (filled[4] !== 1 && filled[4] === 0) {
		filled[4] = 2;
		document.querySelector(`.mul-${5}`).style.display = "block";
	} else if (filled[0] !== 1 && filled[0] === 0) {
		console.log("came here");
		filled[0] = 2;
		console.log(filled);
		document.querySelector(`.mul-${1}`).style.display = "block";
	} else if (filled[2] !== 1 && filled[2] === 0) {
		filled[2] = 2;
		document.querySelector(`.mul-${3}`).style.display = "block";
	} else if (filled[6] !== 1 && filled[6] === 0) {
		filled[6] = 2;
		document.querySelector(`.mul-${7}`).style.display = "block";
	} else if (filled[8] !== 1 && filled[8] === 0) {
		filled[8] = 2;
		document.querySelector(`.mul-${9}`).style.display = "block";
	} else {
		for (let i = 0; i < filled.length && isLeft > 0; i++) {
			if (filled[i] === 0) {
				filled[i] = 2;
				isLeft--;
				document.querySelector(`.mul-${i + 1}`).style.display = "block";
				return;
			}
		}
	}

	isLeft--;
};

const playComputerMedium = function () {
	if (findTwoInWinPosition(2)) {
		// find 2 in continue and win - computer
		isLeft--;
		return;
	}
	if (findTwoInWinPosition(1)) {
		isLeft--;
		return; // find 2 of opponent in continue and block - computer
	}

	if (filled[0] !== 1 && filled[0] === 0) {
		console.log("came here");
		filled[0] = 2;
		console.log(filled);
		document.querySelector(`.mul-${1}`).style.display = "block";
	} else if (filled[2] !== 1 && filled[2] === 0) {
		filled[2] = 2;
		document.querySelector(`.mul-${3}`).style.display = "block";
	} else if (filled[6] !== 1 && filled[6] === 0) {
		filled[6] = 2;
		document.querySelector(`.mul-${7}`).style.display = "block";
	} else if (filled[8] !== 1 && filled[8] === 0) {
		filled[8] = 2;
		document.querySelector(`.mul-${9}`).style.display = "block";
	} else if (filled[4] !== 1 && filled[4] === 0) {
		filled[4] = 2;
		document.querySelector(`.mul-${5}`).style.display = "block";
	} else {
		for (let i = 0; i < filled.length && isLeft > 0; i++) {
			if (filled[i] === 0) {
				filled[i] = 2;
				isLeft--;
				document.querySelector(`.mul-${i + 1}`).style.display = "block";
				return;
			}
		}
	}

	isLeft--;
};

const printWinner = function (val) {
	if (val === 1) {
		console.log("O won");
		isLeft = 0;
	} else if (val === 2) {
		console.log(`came here win`);
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
	else if (filled[2] === filled[4] && filled[4] === filled[6]) {
		console.log("came here checkwin");
		printWinner(filled[2]);
	}
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
		playComputerEasy()
		console.log(filled);
		checkWin();
		if (isLeft === 0) return;
	});
});

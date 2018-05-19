const acceptables = ("abcdefghijklmnopqrstuvwxyz1234567890").split("");

function arrayify(str) {
	let splitString = str.toString().toLowerCase().split('');
	let arrai = [];
	
	splitString.map(char => {
		let isAcc = false; 
		acceptables.map(alph => {
			if (char === alph) {
				isAcc = true;
			}
		});
		if (isAcc === true) {
			arrai.push(char);
		}
	});
	console.log(str+' ––> ', arrai);
	return arrai;
}

function anagram(one, two) {
	let oneB = arrayify(one);
	let twoB = arrayify(two);

	if (oneB.length !== twoB.length) {
		return false;
	}

	for (let i = 0; i < oneB.length; i++) {
		let match = false;

		for (let j = 0; j < twoB.length; j++) {
			if (oneB[i] === twoB[j] && match === false) {
				twoB.splice(j, 1);
				match = true;
			}
		}
		if (match === false) {
			return false;
		}
	}
	return true;
}

const fairyTale = "fairy taLes";
const railSafety = "rAIL!#$% safety";
const ninedigit = "nined1g1t";

console.log(anagram(fairyTale, railSafety));
console.log('>=====<O>=====<');
console.log(anagram(fairyTale, ninedigit));

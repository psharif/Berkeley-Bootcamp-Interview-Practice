function pyramid(n) {
	let lines = n;
	let spaces = lines - 1;
	let hashes = 1;

	while (hashes < lines * 2 - 1) {
		console.log(liner(hashes, spaces));
		hashes += 2;
		spaces--;
	}
}

function liner(hashes, spaces) {
	let lineString = "";
	for (let i = 0; i < spaces; i++) {
		lineString += " ";
	}
	for (let i = 0; i < hashes; i++) {
		lineString += "#";
	}
	return lineString;
}

pyramid(14);
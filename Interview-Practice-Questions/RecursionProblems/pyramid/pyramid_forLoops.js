function pyramid(n) {
	let spaces = n - 1;
	let hashes = 1;

	while (hashes < n * 2 - 1) {
		console.log(liner(hashes, spaces));
		hashes += 2;
		spaces--;
	}
}

// This helper function creates and returns each line
// of the pyramid, with the number of hashes and spaces
// indicated by pyramid's while loop.
function liner(hashes, spaces) {
	let lineString = "";
	for (let i = 0; i < spaces; i++) {
		lineString += " ";
	}
	for (let i = 0; i < hashes; i++) {
		lineString += "#";
	}
	for (let i = 0; i < spaces; i++) {
		lineString += " ";
	}
	return lineString;
}

pyramid(14);
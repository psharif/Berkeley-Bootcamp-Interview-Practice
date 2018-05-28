// For each time pyramid is called, one line is printed
// using the "liner" helper function.
// "pyramid"s second argument m is given a default value
// for the first time the function is called, after 
// which it will be overwritten to keep m constant
// while n is given a new value each call.

// n – the integer passed in originally – is 
// the number of rows; 2n - 1 is the number of columns,
// or the number of hashtags at the base of the pyramid.
function pyramid(n, m = 2*n - 1) {
	if (n > 0) {
		liner(m - 2*(n-1), n-1, "");
		pyramid(n - 1, m);
	}
	else {
		return;
	}
}

function liner(hashes, spaces, lineString) {
	if (spaces > 0) {
		lineString += " ";
		liner(hashes, spaces-1, lineString);
	}
	else if (hashes > 0) {
		lineString += "#";
		liner(hashes-1, 0, lineString);
	}
	else {
		console.log(lineString);
	}
}

pyramid(11);
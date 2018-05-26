function pyramid(n, m) {
	if (!m && n > 0) {
		var max = 2 * n - 1;
		liner(max - 2*(n-1), n-1, "");
		pyramid(n - 1, max);
	}
	else if (m && n > 0) {
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

pyramid(9);
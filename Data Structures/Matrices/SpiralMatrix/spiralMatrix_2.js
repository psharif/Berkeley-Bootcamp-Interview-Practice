function spiral(n) {
// Here the main wrapper array is created, 
// and into it are pushed n sub-arrays.
	let master = [];
	for (let i = 0; i < n; i++) {
		master.push([]);
	}

// Of the 4 possible directions, we begin in the 
// upper left corner going 'right'.
	const directions = ['right', 'down', 'left', 'up'];
	let direction = directions[0];


// VERT and HORT are effectively x and y coordinates which
// keep track of where the number in iteration is
// presently being entered into the spiral.
	let vert = 1; 
	let hort = 0;

// There are four sides, or directions, to
// this spiral;  each time 4 sides have been
// iterated through, the spiral converges on the
// center by one level, thus the spacer is incremented
// on one and only one of the four sides to determine
// the "layer" the sprial is currently on.  
	let spacer = 0;

	for (let i = 1; i <= n*n; i++) {
		if (direction == "right") {
			hort++;
			master[vert-1][hort-1] = i;

			if (hort === n - spacer) {
				direction = directions[1];
			}
		}
		else if (direction === "down") {
			vert++;
			master[vert-1][hort-1] = i;

			if (vert === n - spacer) {
				direction = directions[2];
			}
		}
		else if (direction == "left") {
			hort--;
			master[vert-1][hort-1] = i;

			if (hort === spacer+1) {
				spacer++;
				direction = directions[3];
			}
		}
		else if (direction == "up") {
			vert--;
			master[vert-1][hort-1] = i;

			if (vert === spacer+1) {
				direction = directions[0];
			}
		}
	}
	return master;
}

console.log(spiral(9));
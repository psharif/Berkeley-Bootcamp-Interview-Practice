function chunk(arr, size) {
	const main = [];

	let newray = [];
	arr.map(el => {
		newray.push(el);
	})

	for (let i = 0; i < arr.length/size; i++) {
		let subray = newray.splice(0, size);
		main.push(subray);
	}

	console.log(main);
	console.log('========<O>========');
}

const arrai = [1,2,3,4,5,6,7,8,9];
const arraie = [1,2,3,4,5,6,7,8];
const araii = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

chunk(arrai, 5);
chunk(arraie, 4);
chunk(araii, 3);
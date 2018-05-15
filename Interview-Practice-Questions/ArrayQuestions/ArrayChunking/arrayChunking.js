const arrai = [1,2,3,4,5,6,7,8,9];
const arraie = [1,2,3,4,5,6,7,8];
const araii = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];




function chunk(arr, size) {
	const main = [];

	let arrNum = Math.ceil(arr.length/size);

	for (let i = 0; i < arrNum; i++) {
		main.push([]);
	}

	for (let i = 0; i < arr.length; i++) {
		main[Math.floor(i/size)].push(arr[i])
	}

	console.log(main);
}



chunk(arrai, 4);
chunk(arraie, 4);
chunk(araii, 3);

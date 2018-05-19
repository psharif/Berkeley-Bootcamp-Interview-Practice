function clean(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagram(one, two) {
	return (clean(one) === clean(two));
}

const ayy = "history";
const bee = "this YOR#$$%";

console.log(anagram(ayy, bee));

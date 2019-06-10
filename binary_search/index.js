





function search(arr, term) {
	if (binary_search(arr, term)) {
		(binary_search(arr, term))
	} else {
		binary_search(arr, term)
	}
}


function binary_search(arr, term) {
	var half = arr.slice(0, (arr.length - 1) / 2)
	var halfLast = half[half.length - 1]
	if (term <= halfLast) {
		console.log('half: ', half);
		console.log('halfLast', halfLast);
		console.log('arr value:', arr[arr.indexOf(term)]);
		return arr.indexOf(term)
	} else {
		binary_search(arr, term)
	}
}

binary_search(alpha, 't')
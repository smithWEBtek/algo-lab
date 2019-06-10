function cartProd(paramArray) {

	function addTo(curr, args) {

		var i, copy,
			rest = args.slice(1),
			last = !rest.length,
			result = [];

		for (i = 0; i < args[0].length; i++) {

			copy = curr.slice();
			copy.push(args[0][i]);

			if (last) {
				result.push(copy);

			} else {
				result = result.concat(addTo(copy, rest));
			}
		}
		console.log('result: ', result);
		return result;
	}


	return addTo([], Array.prototype.slice.call(arguments));
}

var a = cartProd([['a', 'b'], ['c', 'd', 'e'], ['f', 'g']]);
console.log(a);
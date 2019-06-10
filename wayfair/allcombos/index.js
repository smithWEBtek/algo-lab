function solution(arr) {
	return arr.reduce(function (a, b) {

		return a.map(function (x) {

			return b.map(function (y) {

				return x.concat(y);
			})
		}).reduce(function (a, b) { return a.concat(b) }, [])
	}, [[]])
}

// var a = solution([[1, 2, 3], [4, 5, 6], [7, 8], [9, 10]]);
// var a = solution([['a', 'b'], ['c', 'd', 'e'], ['f', 'g']]);
var a = solution([['a', 'b'], ['c', 'd', 'e'], ['f', 'g']]);
console.log(a);

module.exports = solution;
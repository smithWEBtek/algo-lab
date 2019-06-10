let arrayOfArrays = [['a', 'b'], ['c', 'd', 'e'], ['f', 'g']]
// Output:
// acf
// acg
// bcf
// bcg
// ...
// aeg


// We keep an array of size equal to total no of arrays. 
// This array called indices helps us keep track of the index of current element in each of the n arrays. 

// Initially it is initialized with all 0s indicating current index in each array is that of first element. 
// We keep printing the combinations until no new combinations can be found. 

// Starting from the rightmost array we check if more elements are there in that array. 
// If yes, we increment the entry for that array in indices i.e. move to the next element in that array. 
// We also make the current indices 0 in all the arrays to the right of this array. 
// We keep moving left to check all arrays until one such array is found. 
// If no more arrays are found we stop there.

function allCombos(A) {
	let result = []
	let maxIndex = -1;
	let maxLength = 0;
	let indices = [0]
	let first = A[0][0]

	A.forEach(function (a, i) {
		if (a.length > maxLength) {
			maxLength = a.length;
			maxIndex = i;
			indices.push(i + 1)
		}
	});

}

console.log('maxLength: ', maxLength);
console.log('maxIndex: ', maxIndex);
console.log('indices: ', indices);
console.log('result: ', result);

return result;
}

allCombos(arrayOfArrays);
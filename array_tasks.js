var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		 arr.splice(index, 0, itemToAdd );
		 return arr;
	},

	square: function (arr) {
		var squaredNumbers = function(number){
			return number * number;
		}
		var newArray= arr.map(squaredNumbers);
		return newArray;
	},

	sum: function (arr) {
		var total = arr.reduce(function(sum, value){
			return sum + value;
		}, 0)
		return total;
	},

	findDuplicates: function (arr) {
		var doublers = [];

		arr.forEach(function(element, index){
			if (arr.indexOf(element, index + 1) > -1) {
				if (doublers.indexOf(element) === -1) {
					doublers.push(element);
				}
			}
		});
		return doublers;
	}
	// 	var  newArray = arr.filter(function( e, i, arr){
	// 		return arr.indexOf(e, i + 1) === -1;
	//
	// 	})
	// 	return newArray;
	// }
// 	/arr = arr.filter(function (e, i, arr) {
//     return arr.indexOf(e, i+1) === -1;
// });
	// removeAndClone: function (arr, valueToRemove) {
	// 	.find
	// }

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks

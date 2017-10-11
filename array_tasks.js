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
	}

	// findDuplicates: function (arr) {

	// },

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks

/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

	var firstElement, secondElement, thirdElement;
	var result = 0;

	for (var i = 0; i < preferences.length; i++) {
		
		firstElement = preferences[i]; 

		secondElement = preferences[firstElement-1];
		
		thirdElement = preferences[secondElement-1];

		
		if ((thirdElement == i+1) && (firstElement < secondElement) && (thirdElement < secondElement))
		{
			result++;
	
		}
	}

  return result;
};


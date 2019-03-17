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

		//console.log (preferences, preferences[i] );
		//console.log (" I = " + i + ". firstElement = " + firstElement + ". secondElement = " + secondElement + ". thirdElement = " + thirdElement + "\n"  );
		



		if ((thirdElement == i+1) && (firstElement < secondElement) && (thirdElement < secondElement))
		{

			


			result = result + 1;

		//	console.log("result = " + result )
		}
	}






	//console.log(preferences + "\n");

 // console.log (result);
  return result;
};



//if (true == 0) {
//	preferences.length //общее число элементов
//};
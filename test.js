"use strict";

function getPrize( expectedScore, realScore ){
	var prize = 0;

	if ( expectedScore.join(':') === realScore.join(':') ) {
		prize = 2;
	} else {
		var result =  realScore[0] - realScore[1] < 0;
		var expectedResult = expectedScore[0] - expectedScore[1] < 0;

		if ( result === expectedResult ) {
			prize = 1;
		}
	}
	
	console.log( 'Ставка на счёт '+ expectedScore.join(':') + ' (реальный: ' + realScore .join(':') + '). Приз: ' + prize);
	return prize;
}

getPrize([1,2], [1,2]); // 2
getPrize([3,3], [3,3]); // 2
getPrize([3,5], [1,2]); // 1
getPrize([5,5], [2,2]); // 1
getPrize([0,0], [1,1]); // 1
getPrize([2,2], [1,2]); // 0
getPrize([2,1], [1,2]); // 0
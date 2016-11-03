// Random number function provided with Assignment
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

var totalCash = 100;
// Create a Market object
var marketObject = {
	apple: (randomNumber(50, 999)) / 100,
	orange: (randomNumber(50, 999)) / 100,
	banana:  (randomNumber(50, 999)) / 100,
	grapes:  (randomNumber(50, 999)) / 100
};

$(function(){
	//$('#totalCash').text('100.00');
	$('.buy').on('click', clickBuy );
	console.log(marketObject)

	function clickBuy(){

		//alert( $(this).parent().attr('id') );
	}
});

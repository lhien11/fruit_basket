
var totalCash = 100;

$(function(){
	$('#totalCash').text('$'+totalCash);

	var marketObject = {
		apple: (randomNumber(50, 999)) / 100,
		orange: (randomNumber(50, 999)) / 100,
		banana:  (randomNumber(50, 999)) / 100,
		grapes:  (randomNumber(50, 999)) / 100
	};

	for(var fruit in marketObject){
		//console.log(fruit);
		$("#"+fruit+"Price").text('$'+marketObject[fruit]);
	}




	// // Run every 15 seconds
	// setInterval(function(){
	// 	// Loop through each property in the marketObject
	// 	for(var fruit in Market){
	// 		$("#"+fruit+"Price").text('$'+marketObject[fruit]);
	// 	}
	// }, 500);

	//Find new price based on randomly generated change in price
	function randomChange(price) {
		console.log("First Price ",price);
		//Generate a random number between -50 and 50
	    var num = randomNumber (-25, 25);
		console.log("num is ", num);
		num /= 100;
		//Divide random number by 100 to get $ value
	    console.log("num is " + num);
		//Add randomly generated change in price to current price
	    price += num;
	    //Round new price to 2 decimal points
	    price = precise_round(price, 2);
		console.log("price is " + price);
		//If price is less than minimum (50 cents), set to minimum
	    if (price < 0.50) {
			price = 0.50;
		//If price is greater than maximum (9.99), set to maximum
	    } else if (price > 9.99) {
			price = 9.99;
		}
		console.log("The new price is " + price);
		return price;
	}



	// Random number function provided with Assignment
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

// From http://stackoverflow.com/questions/3605967/round-half-pennies-up
	function precise_round(num,decimals){
    return Math.round(num*Math.pow(10,decimals))/Math.pow(10,decimals);
}

});

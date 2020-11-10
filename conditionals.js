$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickCountButton").click(countClick);
    $("#birthYearButton").click(checkAge);
    $("#salesTaxButton").click(calcSalesTax);
    $("#catAgeButton").click(recommendFood);
    $("#drawCardButton").click(drawCard);


    var clicks = 0;
    var ageClass = 0;
    var taxRate = 0;
    var chow = 0;



	function countClick() {
        event.preventDefault();
        // Increment a variable that tracks the
		// number of button clicks
        clicks++;

        // Print the current number of clicks to the
		// <p> with ID "clickCountOutput"
        $("#clickCountOutput").text(clicks);

        // When the count gets to 10, reset it to 0
        if (clicks == 10){
            clicks = 0;
        }

	}


    function checkAge() {
        event.preventDefault();
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        var currentYear = new Date().getFullYear();
        var birthYear = parseFloat($("#birthYear").val());
        var age = currentYear - birthYear;

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"
        if (age < 18){
            ageClass = "Child";
        }

        // If they are 18 or over, print "Adult" instead
        else{
            ageClass = "Adult";
        }

        $("#birthYearOutput").text(ageClass);

    }

    function calcSalesTax() {
	    event.preventDefault();
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        var purchaseAmount = parseFloat($("#purchaseAmount").val());

        // Get the state from the text box with ID "state"
        var state = ($("#state").val()).toUpperCase();

        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if (state === "WI"){
            taxRate = 0.05;
        }
        else if (state === "IL"){
            taxRate = 0.08;
        }
        else if (state === "MN"){
            taxRate = 0.075;
        }
        else if (state === "MI"){
            taxRate = 0.055;
        }

        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        var totalTax = (purchaseAmount * taxRate).toFixed(2);
        $("#salesTaxOutput").text(totalTax);

        // If the user enters a state not listed above,
        // print "Error" instead
        if (state !== "WI" && state !== "IL" && state !== "MN" && state !== "MI"){
            $("#salesTaxOutput").text("Error");
        }

    }

    function recommendFood() {
        event.preventDefault();
        // Get the cat's age from the text box with
        // ID of "catAge"
        var catAge = parseFloat($("#catAge").val());

        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"

        if (catAge < 2){
            chow = "Kitten Chow";
        }
        else if (catAge >= 2 && catAge <= 10){
            chow = "Adult Chow";
        }
        else{
            chow = "Senior Chow";
        }

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"
        $("#catAgeOutput").text(chow);

    }

    function drawCard() {
	    event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if (faceValue >= 13){
            description = "King";
        }
        else if (faceValue >= 12){
            description = "Queen";
        }
        else if (faceValue >= 11){
            description = "Jack";
        }
        else if (faceValue >= 2){
            description = faceValue;
        }
        else if (faceValue >= 1){
            description = "Ace";
        }

        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if (suit >= 4){
            description =+ " of Diamonds";
        }
        else if (suit >= 3){
            description += " of Hearts";
        }
        else if (suit >= 2){
            description += " of Spades";
        }
        else if (suit >= 1){
            description += " of Clubs";
        }

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"
        $("#drawCardOutput").text(description);

    }

});
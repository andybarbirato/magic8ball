$(document).ready(function(hideAnswer){
var magic8Ball = {};
magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes – definitely", "You may rely on it", "As I see it", "yes", "Most likely", "Outlook good", "Yes", "Signs point to yes"];

magic8Ball.askQuestion = function(question) {
	$("#8ball").effect("shake");
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
	$("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberForListOfAnswers);
	var answer = this.listOfAnswers[randomIndex];

	$("#answer").text( answer );
	console.log(question);
    console.log(answer);
};
$("#answer").hide();

var onClick = function() {
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(function(){
		var question = prompt("ASK A YES/NO QUESTION");
		magic8Ball.askQuestion(question);
	},500);
};
$("#questionButton").click( onClick );	
});
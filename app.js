//unit 11
function userName(){
	var name = prompt(`what is your name?`)
return name
}

var compScore = 0;
var userScore = 0;
var compNumber = 0;

function computerNum(){
    do{
	    var numbers = Math.floor(Math.random() * 10) + 1;
	    compNumber = compNumber + numbers;
	    alert(` The computer got ${numbers}. The computers new total is ${compNumber}`)
    }while (compNumber <= 16)

    return compNumber
}

function userTurn(){
	alert(`now it is your turn`)
    do{
		var numbers = Math.floor(Math.random() * 10) + 1;
		userNumber = userNumber + numbers;
		alert(`The number you got was ${numbers} the new total is ${userNumber}`)
		var play = prompt (`If you wnat to go again press “y”`)
	}while ((userNumber <= 19) && (play == "y"))

	return userNumber
}
function scores(){
	alert(` The final score is computer- ${compNumber} and you- ${userNumber}`)
}

//scoring

function scoring(userNumber, compNumber){
	if ((compNumber > 20) && (userNumber <21) && (userNumber > compNumber)) {
		alert(`you won with a score of ${userNumber}`)
		userScore++
		alert (`The score is computer- ${compScore} you- ${userScore}`)
	} else if (( compNumber > 20 )&& (userNumber < 21) && (userNumber > compNumber)){
	    alert(` you won with a score of ${userNumber}`)
	    userScore++
	    alert(`the score is computer- ${compScore} you- ${userScore}`)
	} else if  ((compNumber < 21) && (userNumber < 21) && (compNumber > userNumber)) {
		alert(`the computer won with a score of ${userNumber}`)
		compScore++
		alert(`The score is computer- ${compScore} you- ${userScore}`)
	}else if ((compNumber<20) && (userNumber<21) && (compNumber == userNumber)){
	    alert(`You have tied with a score of ${userNumber}`)
	    alert(`The score is computer- ${compScore} you- ${userScore}`)
	}
}
userName()

scoring(computerNum(), userTurn(),scores())

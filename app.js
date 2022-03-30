//the user will go first, and then the computer.

function askName(){
    var n = prompt(`Hello! Welcome to a computer vs human game to see who can get closer to 20 between you and the computer. 
    You will draw a # from 1-10 and the computer will stop at 16. What is your name?`)
    return n
}

function ranNumber(){
    var ran = Math.floor(Math.random() *10) + 1
    return ran
}

alert(`You go first...`)

//variables begin
persontotal = 0
comptotal = 0
decision = "y"
//variables end

function userTurn(){
    //This function will contain a parameter so you can enter the random number as an argument
    do{

        youscore = 0
      
        compscore = 0
      
        do{      
      
            youscore = youscore + ran
      
            alert(`You drew the number ${ran}, your new total is ${youscore}`)
      
            if (youscore > 20) {
              alert (` The you have exceeded the limit meaning the computer has scored`)
              comptotal++
              break
            } 
        }while (youscore<16)
        if (youscore<=20){
            alert("Now it is the computer's turn")
        }
    } 
}

function computerTurn(){
    //This function will contain a parameter so you can enter the random number as an argument
    youscore = 0
      
    compscore = 0
      
    do{
        compscore = compscore + ran
      
        alert(`The computer drew the number ${ran}, it’s new total is ${compscore}`)
      
        if (compscore > 20) {
            alert (` The computer has exceeded the limit meaning you have won`)
            persontotal++
            break
        }
    }while (compscore<16)
        
}

function compareNum(){
//This function will container two parameters so you can enter the user number and the computer number.
}

function gameFunction(){
    // ask the users if they want to play again
    //master function that runs everything
askName()
ranNumber()
userTurn()
computerTurn()
compareNum()

   do{ 
    var decision = prompt (`Do you want to play again? Press "y" for yes and “n” for no.`)
        console.log(decision)
    }while (decision == "y")
}

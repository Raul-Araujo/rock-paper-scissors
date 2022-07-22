function getComputerChoice(){
    let computerOptions = Math.floor(Math.random() * 3);

    if (computerOptions == 0){
        return "ROCK";
    } else if (computerOptions == 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getPlayerChoice(){
    let playerOptions = prompt("Pick up your weapon: ROCK, PAPER or SCISSORS.");
    return playerOptions.toUpperCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You beat computer!";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        return "Your choice: " + playerSelection + " Computer's choice: " + computerSelection + "Computer beats you!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS"){
            return "Nothing happens, same choice.";
    } else if(playerSelection == "ROCK" && computerSelection == "PAPER"){
        return "Computer beats you!";
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        return "Nothing happens, same choice.";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
            return "You beat computer!";
    } else if(playerSelection == "ROCK" && computerSelection == "ROCK"){
        return "Nothing happens, same choice.";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "You beat computer!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
            return "Computer beats you!";
    } else if(playerSelection != "PAPER" || playerSelection != "SCISSORS" || playerSelection != "ROCK") {
        return "Wrong Choice, mate, you loose."
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;

    for (i=0; i < 5; i++){

        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        

            if (playRound(playerSelection, computerSelection) == "You beat computer!"){
                playerPoints++;
                alert("Player's selection: " + playerSelection + "   Computer's selection: " + computerSelection + "\n\n One point to our player. " );
            } else {
                computerPoints++;
                alert( "Computer's selection: " + computerSelection + " Player's selection: " + playerSelection  + " \n\nOne more point to the computer. " );
            }
        
            


    }
    alert("Player's points: " + playerPoints + "   (VS)   Computer's points: " + computerPoints + (playerPoints > computerPoints ? "\n\n You just beat a computer" : "\n\nYou loose."));
}
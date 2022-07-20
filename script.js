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

    for (i=0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
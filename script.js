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

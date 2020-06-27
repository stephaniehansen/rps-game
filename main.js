const playersMove = document.querySelectorAll(".move");
const computersMove = document.querySelector(".computers-move");
const result = document.getElementById("result");
const winCount = document.querySelector(".wins .count");
const drawCount = document.querySelector(".draws .count");
const lossCount = document.querySelector(".losses .count");
let wins = 0;
let draws = 0;
let losses = 0;

playersMove.forEach((move) => {
    move.addEventListener("click", (event) => {
        event.preventDefault();
        const playerMove = move.value; 
        const computerMove = generateComputerMove();
        const outcome = determineWinner(playerMove, computerMove);

        updateResult(outcome);
    })
});

const generateComputerMove = () => {
    const move = Math.floor(Math.random() * 3);
    switch(move){
        case 0:
            computersMove.innerHTML = `<img src="./images/rock.png">`;
            return "Rock";
        case 1:
            computersMove.innerHTML = `<img src="./images/paper.png">`;
            return "Paper";
        case 2:
            computersMove.innerHTML = `<img src="./images/scissors.png">`;
            return "Scissors";
    }
}

const determineWinner = (playerMove, computerMove) => {
    if(computerMove === playerMove){
        return "Draw";
    } else if(computerMove === "Rock"){
        if(playerMove === "Paper"){return "Win";} 
        else if(playerMove === "Scissors"){return "Loss";}
    }
    else if(computerMove === "Paper"){
        if(playerMove === "Rock"){return "Loss";} 
        else if(playerMove === "Scissors"){return "Win";}
    }
    else if(computerMove === "Scissors"){
        if(playerMove === "Rock"){return "Win";} 
        else if (playerMove === "Paper"){return "Loss";}
    }
}

const updateResult = (outcome) => {
    switch(outcome){
        case "Draw":
            draws++;
            drawCount.innerHTML = draws;
            return result.innerHTML = "It's a draw..";
        case "Win":
            wins++;
            winCount.innerHTML = wins;
            return result.innerHTML = "You win!";
        case "Loss":
            losses++;
            lossCount.innerHTML = losses;
            return result.innerHTML = "You lose :(";
    }
}
const choices = document.querySelectorAll('.choice');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const computerMoveElement = document.getElementById('computer-move');

let playerScore = 0;
let computerScore = 0;

const moves = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        
        computerMoveElement.textContent = moves[computerChoice];
        
        const result = determineWinner(playerChoice, computerChoice);
        updateScore(result);
        displayResult(result, playerChoice, computerChoice);
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
}

function updateScore(result) {
    if (result === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayResult(result, playerChoice, computerChoice) {
    if (result === 'draw') {
        resultText.textContent = "It's a draw!";
    } else if (result === 'player') {
        resultText.textContent = `You win! ${moves[playerChoice]} beats ${moves[computerChoice]}`;
    } else {
        resultText.textContent = `You lose! ${moves[computerChoice]} beats ${moves[playerChoice]}`;
    }
} 
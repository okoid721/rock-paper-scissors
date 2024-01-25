const choices = document.querySelectorAll('.choice');
const result = document.querySelector('.result');

choices.forEach(choice => choice.addEventListener('click', playRound));

function playRound(e) {
	const playerChoice = e.target.value;
	const computerChoice = getComputerChoice();
	let winner;

	if (playerChoice === computerChoice) {
		winner = "tie";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		winner = "player";
	} else {
		winner = "computer";
	}

	showResult(winner);
}

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function showResult(winner) {
	if (winner === "player") {
		result.textContent = "You win!";
	} else if (winner === "computer") {
		result.textContent = "Computer wins!";
	} else {
		result.textContent = "It's a tie!";
	}
}
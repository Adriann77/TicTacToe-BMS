const playerChoose = document.querySelectorAll('.userChoose');
const allCell = document.querySelectorAll('.container .box');
const playerPanel = document.querySelector('.player-panel');
const gameContainer = document.querySelector('.container');

let AIPicked;
let currentPlayerPick;

const checkWin = () => {
    allCell.forEach(el => console.log(el.lastElementChild.classList))


}

const AIturn = () => {
	const gameboardSquares = document.querySelectorAll('[data-index]');
	AIPicked = gameboardSquares[Math.floor(Math.random() * (gameboardSquares.length - 1))].lastElementChild;

	setTimeout(() => {
		AIPicked.style.opacity = '1';
		currentPlayerPick === 'cross' ? AIPicked.classList.add('circle') : AIPicked.classList.add('cross');
	}, 500);

	AIPicked.parentElement.setAttribute('disabled', 'true');
	AIPicked.parentElement.removeAttribute('data-index');

	checkWin();

	playerTurn();
};

const playerTurn = () => {
	const gameboardSquares = document.querySelectorAll('[data-index]');

	gameboardSquares.forEach(el => {
		el.addEventListener('click', handlePlayerSquareClick);
	});
};

const handlePlayerSquareClick = event => {
	const el = event.currentTarget;

	if (el.getAttribute('disabled') === 'true') {
		return;
	}

	el.lastElementChild.classList.add(currentPlayerPick);
	el.lastElementChild.style.opacity = '1';
	el.setAttribute('disabled', 'true');
	el.removeAttribute('data-index');

	checkWin();

	AIturn();
};

const startGame = () => {
	if (currentPlayerPick === 'circle') {
		AIturn();
	} else {
		playerTurn();
	}
};

playerChoose.forEach(el => {
	el.addEventListener('click', () => {
		playerPanel.classList.remove('active');
		gameContainer.classList.add('active');
		currentPlayerPick = el.lastElementChild.classList.value;
		console.log(currentPlayerPick);
		startGame();
	});
});

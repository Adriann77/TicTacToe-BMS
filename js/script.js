const playerChoose = document.querySelectorAll('.userChoose');
const allCell = document.querySelectorAll('.container .box');
const playerPanel = document.querySelector('.player-panel');
const gameContainer = document.querySelector('.container');

let AIPicked;
let currentPlayerPick;

const checkWin = () => {
	if (
		allCell[0].lastElementChild.classList.contains('cross') &&
		allCell[1].lastElementChild.classList.contains('cross') &&
		allCell[2].lastElementChild.classList.contains('cross') 
	) {
		console.log('xwin');
	}
	if (
		allCell[3].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[5].lastElementChild.classList.contains('cross')
	) {
		console.log('xwin');
	}
	if (
		allCell[6].lastElementChild.classList.contains('cross') &&
		allCell[7].lastElementChild.classList.contains('cross') &&
		allCell[8].lastElementChild.classList.contains('cross')
	) {
		console.log('xwin');
	}
	if (
		allCell[1].lastElementChild.classList.contains('circle') &&
		allCell[2].lastElementChild.classList.contains('circle') &&
		allCell[0].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[3].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[5].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[6].lastElementChild.classList.contains('circle') &&
		allCell[7].lastElementChild.classList.contains('circle') &&
		allCell[8].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[0].lastElementChild.classList.contains('cross') &&
		allCell[3].lastElementChild.classList.contains('cross') &&
		allCell[6].lastElementChild.classList.contains('cross')
	) {
		console.log('xwin');
	}
	if (
		allCell[1].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[7].lastElementChild.classList.contains('cross')
	) {
		console.log('xwin');
	}
	if (
		allCell[2].lastElementChild.classList.contains('cross') &&
		allCell[5].lastElementChild.classList.contains('cross') &&
		allCell[8].lastElementChild.classList.contains('cross')
	) {
		console.log('xwin');
	}
	if (
		allCell[0].lastElementChild.classList.contains('circle') &&
		allCell[3].lastElementChild.classList.contains('circle') &&
		allCell[6].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[1].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[7].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[2].lastElementChild.classList.contains('circle') &&
		allCell[5].lastElementChild.classList.contains('circle') &&
		allCell[8].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[0].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[8].lastElementChild.classList.contains('cross')
	) {
		console.log('x wins');
	}
	if (
		allCell[2].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[6].lastElementChild.classList.contains('cross')
	) {
		console.log('x wins');
	}
	if (
		allCell[0].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[8].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
	if (
		allCell[2].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[6].lastElementChild.classList.contains('circle')
	) {
		console.log('o wins');
	}
};

const AIturn = () => {
    
	const gameboardSquares = document.querySelectorAll('[data-index]');
	AIPicked = gameboardSquares[Math.floor(Math.random() * (gameboardSquares.length - 1))].lastElementChild;

	setTimeout(() => {
		AIPicked.style.opacity = '1';
	}, 500);
    currentPlayerPick === 'cross' ? AIPicked.classList.add('circle') : AIPicked.classList.add('cross');

	AIPicked.parentElement.setAttribute('disabled', 'true');
	AIPicked.parentElement.removeAttribute('data-index');

	
    
	playerTurn();
};

const playerTurn = () => {
    checkWin()
	const gameboardSquares = document.querySelectorAll('[data-index]');

	gameboardSquares.forEach(el => {
        checkWin()
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


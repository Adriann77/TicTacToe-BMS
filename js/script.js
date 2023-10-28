const playerChoose = document.querySelectorAll('.userChoose');
const allCell = document.querySelectorAll('.container .box');
const playerPanel = document.querySelector('.player-panel');
const gameContainer = document.querySelector('.container');
const winRow = document.querySelector('.win-row');
const colWin = document.querySelector('.col-win');
const diaoWin = document.querySelector('.diao-win');

let AIPicked;
let currentPlayerPick;

const restartGame = () => {
	allCell.forEach(el => {
		el.lastElementChild.classList.remove('cross');
		el.lastElementChild.classList.remove('circle');
		el.setAttribute('disabled', 'false');
		el.setAttribute('data-index', 0);
	});
	gameContainer.classList.remove('active');
	playerPanel.classList.add('active');
	winRow.style.backgroundColor = 'transparent';
	colWin.style.backgroundColor = 'transparent';
	diaoWin.style.backgroundColor = 'transparent';
};

const checkWin = () => {
	if (
		allCell[0].lastElementChild.classList.contains('cross') &&
		allCell[1].lastElementChild.classList.contains('cross') &&
		allCell[2].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		winRow.style.backgroundColor = 'red';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[3].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[5].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		winRow.style.backgroundColor = 'red';
		winRow.style.top = '49' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[6].lastElementChild.classList.contains('cross') &&
		allCell[7].lastElementChild.classList.contains('cross') &&
		allCell[8].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		winRow.style.backgroundColor = 'red';
		winRow.style.top = '81.5' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[1].lastElementChild.classList.contains('circle') &&
		allCell[2].lastElementChild.classList.contains('circle') &&
		allCell[0].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		winRow.style.backgroundColor = 'red';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[3].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[5].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		winRow.style.backgroundColor = 'red';
		winRow.style.top = '49' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[6].lastElementChild.classList.contains('circle') &&
		allCell[7].lastElementChild.classList.contains('circle') &&
		allCell[8].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		winRow.style.backgroundColor = 'red';
		winRow.style.top = '81.5' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[0].lastElementChild.classList.contains('cross') &&
		allCell[3].lastElementChild.classList.contains('cross') &&
		allCell[6].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		colWin.style.backgroundColor = 'red';
		colWin.style.left = '17' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[1].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[7].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		colWin.style.backgroundColor = 'red';
		colWin.style.left = '50' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[2].lastElementChild.classList.contains('cross') &&
		allCell[5].lastElementChild.classList.contains('cross') &&
		allCell[8].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		colWin.style.backgroundColor = 'red';
		colWin.style.left = '82.5' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[0].lastElementChild.classList.contains('circle') &&
		allCell[3].lastElementChild.classList.contains('circle') &&
		allCell[6].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		colWin.style.backgroundColor = 'red';
		colWin.style.left = '17' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[1].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[7].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		colWin.style.backgroundColor = 'red';
		colWin.style.left = '50' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[2].lastElementChild.classList.contains('circle') &&
		allCell[5].lastElementChild.classList.contains('circle') &&
		allCell[8].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		colWin.style.backgroundColor = 'red';
		colWin.style.left = '82.5' + '%';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[0].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[8].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		diaoWin.style.backgroundColor = 'red';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[2].lastElementChild.classList.contains('cross') &&
		allCell[4].lastElementChild.classList.contains('cross') &&
		allCell[6].lastElementChild.classList.contains('cross')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		diaoWin.style.backgroundColor = 'red';

		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[0].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[8].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		diaoWin.style.backgroundColor = 'red';
		diaoWin.style.transform = 'rotate(45deg)';
		setTimeout(() => {
			restartGame();
		}, 2000);
	} else if (
		allCell[2].lastElementChild.classList.contains('circle') &&
		allCell[4].lastElementChild.classList.contains('circle') &&
		allCell[6].lastElementChild.classList.contains('circle')
	) {
		allCell.forEach(el => {
			el.setAttribute('disabled', 'true');
		});
		diaoWin.style.backgroundColor = 'red';
		diaoWin.style.transform = 'rotate(45deg)';
		setTimeout(() => {
			restartGame();
		}, 2000);
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
	checkWin();
	const gameboardSquares = document.querySelectorAll('[data-index]');

	gameboardSquares.forEach(el => {
		checkWin();
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

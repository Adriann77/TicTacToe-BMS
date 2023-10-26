const playerChoose = document.querySelectorAll('.userChoose');
const gameboardSquares = document.querySelectorAll('.container .box');

console.log(gameboardSquares);

let currentPlayerPick;

const setPlayerChoosedFigure = currPick => {
	if (currPick.classList.value === 'circle' || currPick.classList.contains('figure-Circle')) {
		gameboardSquares.forEach(el => {
			el.lastElementChild.classList.add('circle');
		});
	}else{
        gameboardSquares.forEach(el => {
			el.lastElementChild.classList.add('cross');
		});
    }
};

playerChoose.forEach(el =>
	el.addEventListener('click', e => {
        gameboardSquares.forEach(el => {
            el.lastElementChild.classList.remove('circle')
            el.lastElementChild.classList.remove('cross')
        })
		currentPlayerPick = e.target;
		setPlayerChoosedFigure(currentPlayerPick);
	})
);

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess) => ({
	type: ADD_GUESS,
	guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	correctAnswer: Math.round(Math.random() * 100),
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
	tpye: TOGGLE_INFO_MODAL
});
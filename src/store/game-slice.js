import { createSlice } from "@reduxjs/toolkit";
let timer = null;
const INTERVAL = 20;

const gameInititalState = {
	allGuesses: [],
	maxAttempts: 0,
	attempts: 0,
	level: 0,
	places: 0,
	choices: 0,
	answer: [],
	gameStatus: "inactive",
	isLoading: false,
	error: false,
	timed: false,
	finishTime: null,
};

const gameSlice = createSlice({
	name: "game",
	initialState: gameInititalState,
	reducers: {
		changeGameStatus(state, action) {
			state.gameStatus = action.payload.status;
		},
		gameLoading(state, action) {
			state.isLoading = action.payload.loading;
			state.error = action.payload.error;
			if (action.payload.loading) {
				state.gameStatus = "inactive";
			} else {
				state.gameStatus = "active";
			}
		},

		stopTimer(state) {
			state.timed = false;
			state.finishTime = null;
			if (state.gameStatus == "active") {
				state.gameStatus = "lost";
			}
		},
		startGame(state, action) {
			const answer = action.payload.answer;
			state.timed = false;
			state.finishTime = null;

			if (action.payload.level === "hard") {
				state.timed = true;
				state.finishTime = Date.now() + INTERVAL * 1000;
			}
			state.gameStatus = "active";
			state.level = action.payload.level;

			state.places = action.payload.places;
			state.choices = action.payload.choices;
			state.maxAttempts = action.payload.maxAttempts;
			state.answer = answer;
			state.allGuesses = [];
			state.attempts = 0;
		},
		addGuess(state, action) {
			let guess = action.payload.guess.map((x) => parseInt(x));
			let correctPlaces = 0;
			let correctNumbers = 0;
			let remainAns = [];
			let remainGuess = [];
			if (state.gameStatus !== "active") {
				return;
			}
			for (let i = 0; i < state.places; i++) {
				if (guess[i] === state.answer[i]) {
					correctPlaces += 1;
				} else {
					remainAns.push(state.answer[i]);
					remainGuess.push(guess[i]);
				}
			}
			for (let i = 0; i < remainGuess.length; i++) {
				const index = remainAns.indexOf(remainGuess[i]);
				if (index > -1) {
					remainAns.splice(index, 1);
					correctNumbers += 1;
				}
			}
			state.attempts += 1;

			state.allGuesses = [
				...state.allGuesses,
				{ guess: guess, corrPos: correctPlaces, corrNum: correctNumbers },
			];
			if (correctPlaces === state.places) {
				state.gameStatus = "won";
			} else if (state.attempts === state.maxAttempts) {
				state.gameStatus = "lost";
			}
		},
	},
});
export const gameActions = gameSlice.actions;

const fetchData = async (level) => {
	let choices = 0;
	let places = 0;
	let maxAttempts = 0;
	if (level === "medium") {
		places = 4;
		choices = 8;
		maxAttempts = 10;
	} else if (level === "easy") {
		places = 4;
		choices = 4;
		maxAttempts = 8;
	} else {
		places = 6;
		choices = 6;
		maxAttempts = 12;
	}
	const URL = `https://www.random.org/integers/?num=${encodeURIComponent(
		places
	)}&min=0&max=${encodeURIComponent(
		choices - 1
	)}&col=1&base=10&format=plain&rnd=new`;

	const response = await fetch(URL);
	if (!response.ok) {
		throw new Error("Couldnt generate the combination code");
	}
	let body = await response.text();

	let numbers = body
		.split("\n")
		.filter((x) => x !== "")
		.map((x) => parseInt(x));

	return {
		numbers: numbers,
		choices: choices,
		places: places,
		maxAttempts: maxAttempts,
	};
};
export const acStartTimer = (level) => {
	return (dispatch) => {
		clearTimeout(timer);
		if (level === "hard") {
			timer = setTimeout(() => {
				dispatch(gameActions.stopTimer());
			}, INTERVAL * 1000);
		}
	};
};
export const generateNewGame = (level) => {
	return async (dispatch) => {
		dispatch(gameActions.gameLoading({ loading: true, error: false }));

		try {
			const data = await fetchData(level);
			dispatch(acStartTimer(level));

			dispatch(
				gameActions.startGame({
					level: level,
					choices: data.choices,
					answer: data.numbers,
					places: data.places,
					maxAttempts: data.maxAttempts,
				})
			);
			dispatch(gameActions.gameLoading({ error: false, loading: false }));
		} catch (error) {
			dispatch(gameActions.gameLoading({ error: true, loading: false }));
		}
	};
};

export default gameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
let timer = null;
const INTERVAL = 20;

const gameInititalState = {
	allGuesses: [],
	max_attempts: 0,
	attempts: 0,
	level: 0,
	places: 0,
	choices: 0,
	answer: [],
	game_status: "inactive",
	game_is_loading: false,
	error: false,
	timed: false,
	finishTime: null,
};

const gameSlice = createSlice({
	name: "game",
	initialState: gameInititalState,
	reducers: {
		change_game_status(state, action) {
			state.game_status = action.payload.status;
		},
		game_loading(state, action) {
			state.game_is_loading = action.payload.loading;
			state.error = action.payload.error;
			if (action.payload.loading) {
				state.game_status = "inactive";
			} else {
				state.game_status = "active";
			}
		},

		stopTimer(state) {
			state.timed = false;
			state.timer_ended = true;
			state.finishTime = null;
			if (state.game_status == "active") {
				state.game_status = "lost";
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
			state.game_status = "active";
			state.level = action.payload.level;

			state.places = action.payload.places;
			state.choices = action.payload.choices;
			state.max_attempts = action.payload.max_attempts;
			state.answer = answer;
			state.allGuesses = [];
			state.attempts = 0;
		},
		addGuess(state, action) {
			let guess = action.payload.guess.map((x) => parseInt(x));
			let correctPlaces = 0;
			let correctNumbers = 0;
			let remain_ans = [];
			let remain_guess = [];
			if (state.game_status !== "active") {
				return;
			}
			for (let i = 0; i < state.places; i++) {
				if (guess[i] === state.answer[i]) {
					correctPlaces += 1;
				} else {
					remain_ans.push(state.answer[i]);
					remain_guess.push(guess[i]);
				}
			}
			for (let i = 0; i < remain_guess.length; i++) {
				const index = remain_ans.indexOf(remain_guess[i]);
				if (index > -1) {
					remain_ans.splice(index, 1);
					correctNumbers += 1;
				}
			}
			state.attempts += 1;

			state.allGuesses = [
				...state.allGuesses,
				{ guess: guess, corrPos: correctPlaces, corrNum: correctNumbers },
			];
			if (correctPlaces === state.places) {
				state.game_status = "won";
			} else if (state.attempts === state.max_attempts) {
				state.game_status = "lost";
			}
		},
	},
});
export const gameActions = gameSlice.actions;

const fetchData = async (level) => {
	let choices = 0;
	let places = 0;
	let max_attempts = 0;
	if (level === "medium") {
		places = 4;
		choices = 8;
		max_attempts = 10;
	} else if (level === "easy") {
		places = 4;
		choices = 4;
		max_attempts = 8;
	} else {
		places = 6;
		choices = 6;
		max_attempts = 12;
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
		max_attempts: max_attempts,
	};
};
export const acStartTimer = (level) => {
	console.log("Timer", timer);
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
		dispatch(gameActions.game_loading({ loading: true, error: false }));

		try {
			const data = await fetchData(level);
			console.log("ANSWER", data.numbers);
			dispatch(acStartTimer(level));

			dispatch(
				gameActions.startGame({
					level: level,
					choices: data.choices,
					answer: data.numbers,
					places: data.places,
					max_attempts: data.max_attempts,
				})
			);
			dispatch(gameActions.game_loading({ error: false, loading: false }));
		} catch (error) {
			dispatch(gameActions.game_loading({ error: true, loading: false }));
		}
	};
};

export default gameSlice.reducer;

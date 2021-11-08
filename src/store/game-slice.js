import { createSlice } from "@reduxjs/toolkit";

const gameInititalState = {
	allGuesses: [],
	max_attempts: 0,
	attempts: 0,
	difficulty: 0,
	places: 0,
	choices: 0,
	answer: [],
	game_status: "inactive",
	game_is_loading: false,
	error: false,
};

const gameSlice = createSlice({
	name: "game",
	initialState: gameInititalState,
	reducers: {
		generate(state) {
			state.answer = [1, 2, 3, 4];
		},
		change_game_status(state, action) {
			console.log("payload", action.payload.status);

			state.game_status = action.payload.status;
		},
		game_loading(state, action) {
			state.game_is_loading = action.payload.loading;
			state.error = action.payload.error;
		},
		startGame(state, action) {
			const answer = action.payload.answer;
			console.log("answer", answer);
			state.game_status = "active";
			state.difficulty = action.payload.level;

			state.places = action.payload.places;
			state.choices = action.payload.choices;
			state.max_attempts = action.payload.max_attempts;

			state.answer = answer;
			state.allGuesses = [];
			state.attempts = 0;
		},
		addGuess(state, action) {
			console.log("payload", action.payload.guess);
			let guess = action.payload.guess.map((x) => parseInt(x));
			let correctPlaces = 0;
			let correctNumbers = 0;
			let remain_ans = [];
			let remain_guess = [];
			for (let i = 0; i < state.places; i++) {
				console.log("Comparing", state.answer[i], guess[i]);
				if (guess[i] === state.answer[i]) {
					console.log("equal");
					correctPlaces += 1;
					console.log("correctplaces", correctPlaces);
				} else {
					console.log("not_equal");
					console.log("remain_ans", remain_ans);
					remain_ans.push(state.answer[i]);
					remain_guess.push(guess[i]);
				}
			}
			for (let i = 0; i < remain_guess.length; i++) {
				console.log(
					"Remaining answer",
					remain_ans,
					"remaining_guess",
					remain_guess
				);
				const index = remain_ans.indexOf(remain_guess[i]);
				console.log("index", index, "number", remain_guess[i]);
				if (index > -1) {
					remain_ans.splice(index, 1);
					correctNumbers += 1;
				}
			}
			state.attempts += 1;

			state.allGuesses = [
				...state.allGuesses,
				{ guess: guess, inPos: correctPlaces, corr: correctNumbers },
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

export const generateNewGame = (level) => {
	return async (dispatch) => {
		dispatch(gameActions.game_loading({ loading: true, error: false }));
		const fetchData = async () => {
			let numbers = [];
			let choices = 0;
			let places = 0;
			let max_attempts = 0;
			if (level === "medium") {
				places = 4;
				choices = 8;
				max_attempts = 8;
			} else if (level === "easy") {
				places = 4;
				choices = 4;
				max_attempts = 8;
			} else {
				places = 4;
				choices = 10;
				max_attempts = 6;
			}
			const URL = `https://www.random.org/integers/?num=${encodeURIComponent(
				places
			)}&min=0&max=${encodeURIComponent(
				choices - 1
			)}&col=1&base=10&format=plain&rnd=new`;

			// "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new";
			const response = await fetch(URL);
			if (!response.ok) {
				throw new Error("Couldnt generate the code");
			}
			let body = await response.text();
			// console.log("response", Array.from(answer), typeof answer);
			for (let j = 0; j < body.length; j++) {
				if (body[j] !== "\n") {
					numbers.push(parseInt(body[j]));
				}
			}

			return {
				numbers: numbers,
				choices: choices,
				places: places,
				max_attempts: max_attempts,
			};
		};
		try {
			const data = await fetchData();
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
			console.log(error);
			dispatch(gameActions.game_loading({ error: true, loading: false }));
		}
	};
};

export default gameSlice.reducer;

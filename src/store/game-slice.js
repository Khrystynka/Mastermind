import { createSlice } from "@reduxjs/toolkit";

const gameInititalState = {
	allGuesses: [{ guess: [0, 1, 2, 3], inPos: 0, corr: 2 }],
	max_attempts: 8,
	attempts: 0,
	difficulty: 1,
	places: 4,
	choices: 8,
	answer: [1, 2, 3, 4],
	game_status: "active",
};

const gameSlice = createSlice({
	name: "game",
	initialState: gameInititalState,
	reducers: {
		generate(state) {
			state.answer = [1, 2, 3, 4];
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

export default gameSlice.reducer;

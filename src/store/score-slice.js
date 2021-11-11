import { createSlice } from "@reduxjs/toolkit";

const scoreInitialState = {
	score: 0,
	total_games: 0,
};
const scoreSlice = createSlice({
	name: "score",
	initialState: scoreInitialState,
	reducers: {
		add_score(state, action) {
			console.log("Inside score reducer", action.payload.status);
			if (action.payload.status === "won") {
				state.score += 1;
			}
		},
		add_games(state) {
			state.total_games += 1;
		},
		set_score(state, action) {
			state.score = parseInt(action.payload.score);
			state.total_games = parseInt(action.payload.total_games);
		},
	},
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;

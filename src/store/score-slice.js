import { createSlice } from "@reduxjs/toolkit";

const scoreInitialState = {
	score: 0,
	totalGames: 0,
};
const scoreSlice = createSlice({
	name: "score",
	initialState: scoreInitialState,
	reducers: {
		addScore(state, action) {
			if (action.payload.status === "won") {
				state.score += 1;
			}
		},
		addGames(state) {
			state.totalGames += 1;
		},
		setScore(state, action) {
			state.score = parseInt(action.payload.score);
			state.totalGames = parseInt(action.payload.totalGames);
		},
	},
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;

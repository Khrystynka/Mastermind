import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game-slice";
import scoreReducer from "./score-slice";

const store = configureStore({
	reducer: {
		game: gameReducer,
		score: scoreReducer,
	},
});

export default store;

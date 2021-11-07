import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game-slice";
import authReducer from "./auth-slice";

const store = configureStore({
	reducer: {
		game: gameReducer,
		auth: authReducer,
	},
});

export default store;

import { createSlice, configureStore } from "@reduxjs/toolkit";

const gameInititalState = {
	allGuesses: [19],
	max_try: 8,
	difficulty: 1,
	places: 4,
	choices: 8,
	answer: [],
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
			state.allGuesses = [...state.allGuesses, action.payload.guess];
		},
	},
});

const authInitialState = {
	isAuthenticated: false,
};
const authSlice = createSlice({
	name: "auth",
	initialState: authInitialState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state, action) {
			state.isAuthenticated = false;
		},
	},
});
const store = configureStore({
	reducer: {
		game: gameSlice.reducer,
		auth: authSlice.reducer,
	},
});
export const gameActions = gameSlice.actions;
export const authActions = authSlice.actions;

export default store;

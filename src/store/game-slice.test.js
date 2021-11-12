import reducer, { gameActions } from "./game-slice";
// const gameInititalState = {
// 	allGuesses: [],
// 	max_attempts: 0,
// 	attempts: 0,
// 	level: 0,
// 	places: 0,
// 	choices: 0,
// 	answer: [],
// 	game_status: "inactive",
// 	game_is_loading: false,
// 	error: false,
// };

test("should return the initial state", () => {
	expect(reducer(undefined, {})).toEqual({
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
	});
});

test("should handle a new game created", () => {
	const previousState = {
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
	};
	expect(
		reducer(
			previousState,
			gameActions.startGame({
				level: "easy",
				choices: 4,
				answer: [3, 0, 2, 1],
				places: 4,
				max_attempts: 8,
			})
		)
	).toEqual({
		allGuesses: [],
		max_attempts: 8,
		attempts: 0,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "active",
		game_is_loading: false,
		error: false,
	});
});
test("should handle a new guess", () => {
	const previousState = {
		allGuesses: [],
		max_attempts: 8,
		attempts: 0,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "active",
		game_is_loading: false,
		error: false,
	};
	expect(
		reducer(
			previousState,
			gameActions.addGuess({
				guess: ["2", "3", "0", "1"],
			})
		)
	).toEqual({
		allGuesses: [{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 }],
		max_attempts: 8,
		attempts: 1,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "active",
		game_is_loading: false,
		error: false,
	});
});
test("should detect the winner", () => {
	const previousState = {
		allGuesses: [{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 }],
		max_attempts: 8,
		attempts: 1,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "active",
		game_is_loading: false,
		error: false,
	};
	expect(
		reducer(
			previousState,
			gameActions.addGuess({
				guess: ["3", "0", "2", "1"],
			})
		)
	).toEqual({
		allGuesses: [
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 0, guess: [3, 0, 2, 1], inPos: 4 },
		],
		max_attempts: 8,
		attempts: 2,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "won",
		game_is_loading: false,
		error: false,
	});
});
test("should detect the user lost", () => {
	const previousState = {
		allGuesses: [
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
		],
		max_attempts: 8,
		attempts: 7,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "active",
		game_is_loading: false,
		error: false,
	};
	expect(
		reducer(
			previousState,
			gameActions.addGuess({
				guess: ["0", "0", "2", "1"],
			})
		)
	).toEqual({
		allGuesses: [
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 0, guess: [0, 0, 2, 1], inPos: 3 },
		],
		max_attempts: 8,
		attempts: 8,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "lost",
		game_is_loading: false,
		error: false,
	});
});

// test("should handle a todo being added to an existing list", () => {
// 	const previousState = [
// 		{
// 			text: "Run the tests",
// 			completed: true,
// 			id: 0,
// 		},
// 	];
// 	expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
// 		{
// 			text: "Run the tests",
// 			completed: true,
// 			id: 0,
// 		},
// 		{
// 			text: "Use Redux",
// 			completed: false,
// 			id: 1,
// 		},
// 	]);
// });

test("should detect the invalid attemt to guess after the set amount of tries", () => {
	const previousState = {
		allGuesses: [
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 0, guess: [0, 0, 2, 1], inPos: 3 },
		],
		max_attempts: 8,
		attempts: 8,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "lost",
		game_is_loading: false,
		error: false,
	};
	expect(
		reducer(
			previousState,
			gameActions.addGuess({
				guess: ["1", "0", "2", "1"],
			})
		)
	).toEqual({
		allGuesses: [
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 3, guess: [2, 3, 0, 1], inPos: 1 },
			{ corr: 0, guess: [0, 0, 2, 1], inPos: 3 },
		],
		max_attempts: 8,
		attempts: 8,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		game_status: "lost",
		game_is_loading: false,
		error: false,
	});
});

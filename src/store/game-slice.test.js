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
	});
});

test("should handle a new game created", () => {
	const previousState = {
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
	expect(
		reducer(
			previousState,
			gameActions.startGame({
				level: "easy",
				choices: 4,
				answer: [3, 0, 2, 1],
				places: 4,
				maxAttempts: 8,
			})
		)
	).toEqual({
		allGuesses: [],
		maxAttempts: 8,
		attempts: 0,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "active",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
	});
});
test("should handle a new guess", () => {
	const previousState = {
		allGuesses: [],
		maxAttempts: 8,
		attempts: 0,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "active",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
	};
	expect(
		reducer(
			previousState,
			gameActions.addGuess({
				guess: ["2", "3", "0", "1"],
			})
		)
	).toEqual({
		allGuesses: [{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 }],
		maxAttempts: 8,
		attempts: 1,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "active",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
	});
});
test("should detect the winner", () => {
	const previousState = {
		allGuesses: [{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 }],
		maxAttempts: 8,
		attempts: 1,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "active",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
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
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 0, guess: [3, 0, 2, 1], corrPos: 4 },
		],
		maxAttempts: 8,
		attempts: 2,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "won",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
	});
});
test("should detect the user lost", () => {
	const previousState = {
		allGuesses: [
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
		],
		maxAttempts: 8,
		attempts: 7,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "active",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
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
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 0, guess: [0, 0, 2, 1], corrPos: 3 },
		],
		maxAttempts: 8,
		attempts: 8,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "lost",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
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
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 0, guess: [0, 0, 2, 1], corrPos: 3 },
		],
		maxAttempts: 8,
		attempts: 8,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "lost",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
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
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 3, guess: [2, 3, 0, 1], corrPos: 1 },
			{ corrNum: 0, guess: [0, 0, 2, 1], corrPos: 3 },
		],
		maxAttempts: 8,
		attempts: 8,
		level: "easy",
		places: 4,
		choices: 4,
		answer: [3, 0, 2, 1],
		gameStatus: "lost",
		isLoading: false,
		error: false,
		timed: false,
		finishTime: null,
	});
});

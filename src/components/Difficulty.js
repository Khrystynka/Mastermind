import React from "react";
import { useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";

const Difficulty = () => {
	const dispatch = useDispatch();
	const startGameHandler = (level) => {
		dispatch(gameActions.startGame({ level: level }));
	};
	return (
		<div>
			<button onClick={() => startGameHandler("easy")}>Easy</button>;
			<button onClick={() => startGameHandler("medium")}>Medium</button>;
			<button onClick={() => startGameHandler("hard")}>Hard</button>;
		</div>
	);
};

export default Difficulty;

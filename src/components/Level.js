import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { gameActions } from "../store/game-slice";
import { generateNewGame } from "../store/game-slice";

const Level = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const game_loading = useSelector((state) => state.game.game_is_loading);

	const startGameHandler = (level) => {
		// dispatch(gameActions.startGame({ level: level }));
		dispatch(generateNewGame(level));

		navigate("/game");
	};
	return (
		<div>
			<button onClick={() => startGameHandler("easy")}>Easy</button>;
			<button onClick={() => startGameHandler("medium")}>Medium</button>;
			<button onClick={() => startGameHandler("hard")}>Hard</button>;
		</div>
	);
};

export default Level;

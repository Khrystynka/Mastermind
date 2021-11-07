import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gameActions } from "../store/game-slice";

const Level = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const startGameHandler = (level) => {
		dispatch(gameActions.startGame({ level: level }));
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

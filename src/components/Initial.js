import React from "react";
import { useNavigate } from "react-router-dom";
// import classes from "./GuessItem.module.css";
const Initial = (props) => {
	const navigate = useNavigate();
	const startGameHandler = () => {
		navigate("/level", { replace: true });
	};
	return (
		<div>
			<div>Mastermind game</div>
			<button onClick={startGameHandler}>Start new game</button>
		</div>
	);
};

export default Initial;

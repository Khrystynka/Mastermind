import React from "react";
// import classes from "./GuessItem.module.css";

const Initail = (props) => {
	const startGameHandler = () => {
		console.log("go to difficulty window");
	};
	return (
		<div>
			<div>Mastermind game</div>
			<button onClick={startGameHandler}>Start new game</button>
		</div>
	);
};

export default Initial;

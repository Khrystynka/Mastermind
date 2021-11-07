import React from "react";
const gameOver = (props) => {
	let message = "You Lost!";
	if (props.status === "won") {
		message = "You won!";
	}
	return (
		<div>
			<div>
				{message}
				<button onClick={props.newGameHandler}>New Game</button>
				<button onClick={props.cancelGameHandler}>Cancel</button>
			</div>
		</div>
	);
};

export default gameOver;

import React from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
// import { gameActions } from "../store/game-slice";
import { useNavigate } from "react-router-dom";
import InputList from "./InputList";
const GuessList = (props) => {
	// const dispatch = useDispatch();
	const allGuesses = useSelector((state) => state.game.allGuesses);
	const places = useSelector((state) => state.game.places);
	const choices = useSelector((state) => state.game.choices);
	const game_status = useSelector((state) => state.game.game_status);
	console.log("GuessList", game_status);

	const navigate = useNavigate();
	// const answer = useSelector((state) => state.game.answer);
	const newGameHandler = () => {
		navigate("/level", { replace: true });
	};
	console.log(allGuesses);
	let controls = <InputList choices={choices} />;
	if (game_status != "active") {
		controls = (
			<div>
				<button onClick={newGameHandler}>Start new game</button>
			</div>
		);
	}

	return (
		<div>
			<div>
				{allGuesses.map((obj) => {
					return (
						<GuessItem
							guess={obj.guess}
							inPos={obj.inPos}
							corr={obj.corr}
							incorr={places - obj.corr - obj.inPos}
						/>
					);
				})}
			</div>
			{controls}
			{/* <InputList choices={choices} /> */}
		</div>
	);
};

export default GuessList;

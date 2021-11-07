import React from "react";
// import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
// import { gameActions } from "../store/game-slice";
import InputList from "./InputList";
const GuessList = (props) => {
	// const dispatch = useDispatch();
	const allGuesses = useSelector((state) => state.game.allGuesses);
	const places = useSelector((state) => state.game.places);
	const choices = useSelector((state) => state.game.choices);

	// const answer = useSelector((state) => state.game.answer);

	console.log(allGuesses);

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

			<InputList choices={choices} />
		</div>
	);
};

export default GuessList;

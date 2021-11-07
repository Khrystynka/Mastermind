import React from "react";
import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game-slice";
const GuessList = (props) => {
	const dispatch = useDispatch();
	const allGuesses = useSelector((state) => state.game.allGuesses);
	const places = useSelector((state) => state.game.places);
	// const answer = useSelector((state) => state.game.answer);

	console.log(allGuesses);
	// const places = useSelector((state) => state.game.places);
	const [guess, updateGuess] = useState("");
	const clickHandler = () => {
		console.log("clicked", guess);
		dispatch(gameActions.addGuess({ guess: guess }));
		updateGuess("");
		console.log(allGuesses);
	};

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

			<input value={guess} onChange={(e) => updateGuess(e.target.value)} />
			<button onClick={clickHandler}>Guess</button>
		</div>
	);
};

export default GuessList;

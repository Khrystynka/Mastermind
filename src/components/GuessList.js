import React from "react";
import { useState } from "react";
import GuessItem from "./GuessItem";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/index";
const GuessList = (props) => {
	const dispatch = useDispatch();
	const allGuesses = useSelector((state) => state.game.allGuesses);
	console.log(allGuesses);
	const places = useSelector((state) => state.game.places);
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
				<GuessItem Guess={places} />
				<GuessItem Guess={allGuesses[allGuesses.length - 1]} />
				<GuessItem Guess={1000} />
				<GuessItem Guess={3000} /> <GuessItem Guess={6000} />
				<GuessItem Guess={1000} />
			</div>

			<input value={guess} onChange={(e) => updateGuess(e.target.value)} />
			<button onClick={clickHandler}>Guess</button>
		</div>
	);
};

export default GuessList;

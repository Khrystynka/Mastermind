import { useState } from "react";
import { useDispatch } from "react-redux";
import InputBtn from "./InputBtn";
import { gameActions } from "../store/game-slice";

const InputList = (props) => {
	const [guessArr, setGuessArr] = useState([0, 0, 0, 0]);
	const dispatch = useDispatch();
	const changeHandler = (btnNum) => {
		console.log("Old Guess Array", guessArr);

		const new_arr = [...guessArr];
		new_arr[btnNum] = (new_arr[btnNum] + 1) % props.choices;
		setGuessArr(new_arr);
		// console.log("Guess Array", guessArr);
	};
	const submitHandler = (guess) => {
		console.log("clicked", guess);
		dispatch(gameActions.addGuess({ guess: guess }));
		// updateGuess("");
		// console.log(allGuesses);
	};
	return (
		<div>
			{Object.keys(guessArr).map((id) => {
				return <InputBtn id={id} change={changeHandler} text={guessArr[id]} />;
			})}

			<button onClick={() => submitHandler(guessArr)}>Guess</button>
		</div>
	);
};

export default InputList;

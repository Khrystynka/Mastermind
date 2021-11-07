import React from "react";
import classes from "./GuessItem.module.css";

const GuessItem = (props) => {
	return (
		<div className={classes.GuessItem}>
			<div className={classes.AnswerBox}>
				<div className={classes.CorrectLocation}></div>
				<div className={classes.CorrectNumber}></div>
				<div className={classes.CorrectNumber}></div>
				<div className={classes.IncorrectNumber}></div>
			</div>

			<div className={classes.Guess}>{props.Guess}</div>
		</div>
	);
};

export default GuessItem;

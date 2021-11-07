import React from "react";
import classes from "./GuessItem.module.css";

const GuessItem = (props) => {
	const arr1 = [...Array(props.inPos).keys()];
	const arr2 = [...Array(props.corr).keys()];
	const arr3 = [...Array(props.incorr).keys()];

	return (
		<div className={classes.GuessItem}>
			<div className={classes.AnswerBox}>
				{arr1.map((x) => {
					return <div className={classes.CorrectLocation}></div>;
				})}
				{arr2.map((x) => {
					return <div className={classes.CorrectNumber}></div>;
				})}
				{arr3.map((x) => {
					return <div className={classes.IncorrectNumber}></div>;
				})}
				{/* <div className={classes.CorrectNumber}></div>
				<div className={classes.CorrectNumber}></div>
				<div className={classes.IncorrectNumber}></div> */}
			</div>

			<div className={classes.Guess}>{props.guess}</div>
		</div>
	);
};

export default GuessItem;

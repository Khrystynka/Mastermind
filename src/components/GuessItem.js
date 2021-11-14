import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import useStyles from "./Styles.styles";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { blue } from "@mui/material/colors";

const GuessItem = (props) => {
	const corrPos = [...Array(props.corrPos).keys()];
	const corrNum = [...Array(props.corrNum).keys()];
	const inCorr = [...Array(props.inCorr).keys()];
	const classes = useStyles();
	const level = useSelector((state) => state.game.level);
	return (
		<ListItem>
			<Grid container spacing={0.1}>
				{corrPos.map((_, key) => {
					return (
						<Grid item key={key} xs>
							<Box className={classes.correctLocation}></Box>
						</Grid>
					);
				})}
				{corrNum.map((_, key) => {
					return (
						<Grid item key={key} xs>
							<Box className={classes.correctNumber}></Box>
						</Grid>
					);
				})}
				{inCorr.map((_, key) => {
					return (
						<Grid item key={key} xs>
							<Box className={classes.incorrectNumber}></Box>
						</Grid>
					);
				})}
			</Grid>

			<ButtonGroup variant="contained" className={classes.marginL}>
				{props.guess.map((value, key) => {
					let colors = ["green", "yellow", "blue", "red"];
					// let colorClass = classes.button;

					// if (value !== "x" && level === "easy") {
					// 	colorClass = classes.button0;
					// 	console.log("CLASS", colorClass, value);
					// }
					const btn =
						value === "x" ? (
							<Button key={key} disabled className={classes.button}>
								{value}
							</Button>
						) : (
							// <Button className={`classes.button ${colorClass}`}></Button>
							<Button
								key={key}
								className={classes.button}
								sx={
									level === "easy"
										? {
												backgroundColor: colors[value],
										  }
										: {}
								}
							>
								{level === "easy" ? null : value}
							</Button>
						);
					return btn;
				})}
			</ButtonGroup>
		</ListItem>
	);
};

export default GuessItem;

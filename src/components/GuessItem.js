import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import useStyles from "./Styles.styles";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GuessItem = (props) => {
	const corrPos = [...Array(props.corrPos).keys()];
	const corrNum = [...Array(props.corrNum).keys()];
	const inCorr = [...Array(props.inCorr).keys()];
	const classes = useStyles();
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
					const btn =
						value === "x" ? (
							<Button key={key} disabled className={classes.button}>
								{value}
							</Button>
						) : (
							<Button className={classes.button}>{value}</Button>
						);
					return btn;
				})}
			</ButtonGroup>
		</ListItem>
	);
};

export default GuessItem;

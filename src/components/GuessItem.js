import React from "react";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import useStyles from "./GuessItem.styles";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GuessItem = (props) => {
	const arr1 = [...Array(props.inPos).keys()];
	const arr2 = [...Array(props.corr).keys()];
	const arr3 = [...Array(props.incorr).keys()];
	const classes = useStyles();
	return (
		<ListItem>
			<Grid
				container
				spacing={0.1}
				container
				direction="row"
				justifyContent="flex-start"
				alignItems="flex-start"
			>
				{arr1.map((_, key) => {
					return (
						<Grid item key={key} xs>
							<Box className={classes.correctLocation}></Box>
						</Grid>
					);
				})}
				{arr2.map((_, key) => {
					return (
						<Grid item key={key} xs>
							<Box className={classes.correctNumber}></Box>
						</Grid>
					);
				})}
				{arr3.map((_, key) => {
					return (
						<Grid item xs={6} key={key} xs>
							<Box className={classes.incorrectNumber}></Box>
						</Grid>
					);
				})}
			</Grid>

			<ButtonGroup
				variant="contained"
				aria-label="outlined primary button group"
				className={classes.buttonGroupML}
			>
				{props.guess.map((value) => {
					const btn =
						value === "x" ? (
							<Button disabled className={classes.button}>
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

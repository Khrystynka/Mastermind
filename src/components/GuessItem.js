import React from "react";
import classes from "./GuessItem.module.css";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import useStyles from "./GuessItem.styles";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GuessItem = (props) => {
	const arr1 = [...Array(props.inPos).keys()];
	const arr2 = [...Array(props.corr).keys()];
	const arr3 = [...Array(props.incorr).keys()];
	const classes = useStyles();
	return (
		<ListItem style={{ display: "flex", justifyContent: "center" }}>
			<Box sx={{ display: "flex", justifyContent: "flexStart" }}>
				{/* <Container> */}
				<Grid
					container
					// spacing={0}
					rowSpacing={0}
					columnSpacing={0}
				>
					{arr1.map((x) => {
						return (
							<Grid item xs style={{ display: "flex", alignItems: "center" }}>
								<Box className={classes.correctLocation}></Box>
							</Grid>
						);
					})}
					{arr2.map((x) => {
						return (
							<Grid item xs style={{ display: "flex", alignItems: "center" }}>
								<Box className={classes.correctNumber}></Box>
							</Grid>
						);
					})}
					{arr3.map((x) => {
						return (
							<Grid item xs style={{ display: "flex", alignItems: "center" }}>
								<Box className={classes.incorrectNumber}></Box>
							</Grid>
						);
					})}
				</Grid>
			</Box>

			<ButtonGroup
				variant="contained"
				aria-label="outlined primary button group"
				className={classes.buttonGroupML}
				style={{ flex: "flexGrow" }}
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

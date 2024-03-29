import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
const gameOver = (props) => {
	let message = "You Lost!";
	let msgColor = "black";
	if (props.status === "won") {
		message = "You won!";
		msgColor = "red";
	}
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<Typography
				align="center"
				color={msgColor}
				variant="h6"
				gutterBottom
				component="div"
			>
				{message}
			</Typography>
			<Stack justifyContent="center" direction="row" spacing={2}>
				<Button variant="contained" onClick={props.newGameHandler}>
					New Game
				</Button>
				<Button variant="contained" onClick={props.cancelGameHandler}>
					Cancel
				</Button>
			</Stack>
		</Box>
	);
};

export default gameOver;

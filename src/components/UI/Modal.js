import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "./Backdrop";
import { Box } from "@mui/system";

const Modal = (props) => {
	return (
		<Box>
			<Box
				className={classes.Modal}
				style={{
					transform: props.show ? "translateY(0)" : "translateY(-100vh)",
					opacity: props.show ? "1" : "0",
				}}
			>
				{props.children}
			</Box>
			<Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
		</Box>
	);
};

export default Modal;

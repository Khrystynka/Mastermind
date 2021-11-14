import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/MUI/theme";
import store from "../store/index";

function render(ui, { preloadedState, st = store, ...renderOptions } = {}) {
	function Wrapper({ children }) {
		return (
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<Provider store={st}>{children}</Provider>
				</ThemeProvider>
			</BrowserRouter>
		);
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

import React from "react";
import ReactDOM from "react-dom";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./State/Store";

import "normalize.css";
import { GlobalStyle } from "./Style";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<GlobalStyle />
				<Router>
					<App />
				</Router>
			</HelmetProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./State/Store";
import reportWebVitals from "./reportWebVitals";

import "normalize.css";
import { GlobalStyle } from "./Style";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<GlobalStyle />
				<App />
			</HelmetProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

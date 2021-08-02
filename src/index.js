import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { GlobalStyle } from "./Style";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.render(
	<React.StrictMode>
		<HelmetProvider>
			<GlobalStyle />
			<App />
		</HelmetProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

reportWebVitals();

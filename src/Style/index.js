import { createGlobalStyle } from "styled-components";

export * as Variables from "./Variables";
export * as Functions from "./Functions";

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		font-family: "Roboto", sans-serif;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
	}
`;

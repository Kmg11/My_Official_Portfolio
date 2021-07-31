import { createGlobalStyle } from "styled-components";

export * as Variables from "./Variables";
export * as Functions from "./Functions";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Roboto", sans-serif;
	}

	ul {
		list-style: none;
	}

	a {
		text-decoration: none;
	}
`;

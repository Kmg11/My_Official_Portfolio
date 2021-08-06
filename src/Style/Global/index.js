import { createGlobalStyle } from "styled-components";
import { Variables } from "..";

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	body {
		background-color: ${Variables.Colors.backgroundColor};
		font-family: "Roboto", sans-serif;
		overflow-x: hidden;
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

	img {
		user-select: none;
	}
`;

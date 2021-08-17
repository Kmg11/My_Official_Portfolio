import { createGlobalStyle } from "styled-components";
import { Variables } from "..";

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after,
	body *,
	body *::before,
	body *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		background-color: ${Variables.Colors.backgroundColor};
		font-family: "Roboto", sans-serif;
	}

	::selection {
		background-color: ${Variables.Colors.mainColor};
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

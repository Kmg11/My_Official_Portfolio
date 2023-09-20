import { createGlobalStyle } from 'styled-components';
import { Colors } from '../Variables';

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

	html {
		scrollbar-width: normal;
		scrollbar-color: ${Colors.mainColor} ${Colors.secondBackgroundColor};
	}

	::-webkit-scrollbar {
		width: 1.1vw;
	}
	
	::-webkit-scrollbar-thumb {
		background-color: ${Colors.mainColor};
	}

	::-webkit-scrollbar-track {
		background-color: ${Colors.secondBackgroundColor};
	}

	body {
		background-color: ${Colors.backgroundColor};
		font-family: "Roboto", sans-serif;
	}

	::selection {
		background-color: ${Colors.mainColor};
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

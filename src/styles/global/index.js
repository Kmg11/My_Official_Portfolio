import { createGlobalStyle } from 'styled-components';

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
		scrollbar-color: ${(p) => p.theme.colors.mainColor} ${(p) => p.theme.colors.secondBackgroundColor};
	}

	::-webkit-scrollbar {
		width: 1.1vw;
	}
	
	::-webkit-scrollbar-thumb {
		background-color: ${(p) => p.theme.colors.mainColor};
	}

	::-webkit-scrollbar-track {
		background-color: ${(p) => p.theme.colors.secondBackgroundColor};
	}

	body {
		background-color: ${(p) => p.theme.colors.backgroundColor};
		font-family: "Roboto", sans-serif;
	}

	::selection {
		background-color: ${(p) => p.theme.colors.mainColor};
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

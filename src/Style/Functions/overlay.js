import { css } from "styled-components";

export const overlay = (backgroundColor, backgroundImage) => {
	return css`
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;

		${backgroundColor &&
		css`
			background-color: ${backgroundColor};
		`}

		${backgroundImage &&
		css`
			background-image: ${backgroundImage};
		`}
	`;
};

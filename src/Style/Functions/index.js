import { css } from "styled-components";
import { Variables } from "..";

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

export const backgroundImage = (backgroundImage) => {
	return css`
		background-color: ${Variables.Colors.backgroundColor};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(${backgroundImage});
	`;
};
import { css } from "styled-components";
import { Variables } from "../";

export const backgroundImage = (backgroundImage) => {
	return css`
		background-color: ${Variables.Colors.backgroundColor};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-image: url(${backgroundImage});
	`;
};

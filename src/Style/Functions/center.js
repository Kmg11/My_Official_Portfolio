import { css } from "styled-components";
import { Style } from "../../Constants";

export const center = (centerWith) => {
	return css`
		${centerWith === Style.POSITION &&
		css`
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		`}
	`;
};

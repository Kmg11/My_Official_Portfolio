import styled from "styled-components";
import { Functions, Variables } from "../../../../Style";

export const Description = styled.p`
	color: ${Variables.Colors.whiteColor};
	width: 400px;
	line-height: 1.5;

	${Functions.mediaBreakpointDown("xs")} {
		width: 100%;
	}
`;

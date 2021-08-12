import styled from "styled-components";
import { Functions, Variables } from "..";

export const PageContent = styled.section`
	background-color: ${Variables.Colors.backgroundColor};
	min-height: 100vh;
	padding-left: ${(props) => props.navbarWidth}px;

	${Functions.mediaBreakpointDown("sm")} {
		padding-left: 0;
		padding-top: ${(props) => props.navbarHeight + 30}px;
	}
`;

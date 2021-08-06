import styled from "styled-components";
import { Variables } from "..";

export const PageContent = styled.section`
	background-color: ${Variables.Colors.backgroundColor};
	min-height: 100vh;
	padding-left: ${(props) => props.navWidth}px;
`;

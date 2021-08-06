import styled from "styled-components";
import { Variables, Functions } from "../../Style";
import { Images, Style } from "../../Constants";

export const Home = styled.section`
	position: relative;
	min-height: 100vh;
	${Functions.backgroundImage(`${Images.HOME}/background.webp`)}

	&::before {
		content: "";
		${Functions.overlay(Variables.Colors.backgroundOverlay)};
	}
`;

export const Content = styled.div`
	${Functions.center(Style.POSITION)};
	z-index: 2;
`;

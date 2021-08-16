import styled from "styled-components";
import { Variables, Functions } from "../../Style";
import { Images } from "../../Constants";

export const Home = styled.section`
	position: relative;
	min-height: 100vh;
	${Functions.backgroundImage(`${Images.HOME}/background.webp`)}
	${Functions.center("grid")};

	&::before {
		content: "";
		z-index: 2;
		${Functions.overlay(Variables.Colors.backgroundOverlay)};
	}
`;

export const Content = styled.div`
	z-index: 2;
`;

import styled from "styled-components";
import { Variables, Functions } from "../../Style";

export const Home = styled.section`
	position: relative;
	min-height: 100vh;
	${Functions.center("grid")};

	&::before {
		content: "";
		z-index: 2;
		${Functions.overlay(Variables.Colors.backgroundOverlay)};
	}
`;

export const Content = styled.div`
	z-index: 3;
`;

export const CoverImage = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

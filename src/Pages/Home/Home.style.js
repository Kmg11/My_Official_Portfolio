import styled from "styled-components";
import { Variables, Functions } from "../../Style";

export const Home = styled.section`
	position: relative;
	min-height: 100vh;
	${Functions.backgroundImage("/images/home/background.webp")}

	&::before {
		content: "";
		${Functions.overlay(Variables.Colors.backgroundOverlay)};
	}
`;

export const Content = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 2;
`;

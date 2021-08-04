import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Variables, Functions } from "../../Style";

export const Home = styled.section`
	position: relative;
	min-height: 100vh;
	${Functions.backgroundImage("/Images/Home/background.webp")}

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

export const NextButton = styled(Link)`
	text-align: center;
	display: block;
`;

export const Arrows = styled.div`
	transform: rotate(-90deg);
	cursor: pointer;
	display: inline-block;
`;

const arrowsAnimation = keyframes`
	0% {opacity: 0;}
	50% {opacity: 1;}
	100% {opacity: 0;}
`;

export const Arrow = styled.span`
	display: block;
	width: 20px;
	height: 20px;
	border-width: 3px;
	border-style: solid;
	border-color: transparent ${Variables.Colors.whiteColor}
		${Variables.Colors.whiteColor} transparent;
	transform: rotate(45deg);
	opacity: 0;
	animation: ${arrowsAnimation} 1.3s linear infinite;

	&:nth-of-type(2) {
		animation-delay: 0.2s;
	}

	&:nth-of-type(3) {
		animation-delay: 0.4s;
	}
`;

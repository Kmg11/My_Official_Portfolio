import { Link } from "react-router-dom";
import styled from "styled-components";
import { Functions, Variables } from "../../../Style";

export const Slider = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 30vh;
	gap: 20px;
`;

export const Buttons = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 0;
	z-index: 4;
	width: max-content;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 20px;
	justify-content: start;
	align-items: center;
	opacity: 0;
	transition: all 0.2s linear;
`;

export const ButtonIcon = styled.span`
	color: ${Variables.Colors.whiteColor};
	display: inline-block;
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid ${Variables.Colors.whiteColor};
	border-radius: 50%;
	margin-right: 10px;
	font-size: 1rem;
	transition: all 0.2s linear;
`;

export const ButtonName = styled.span`
	color: ${Variables.Colors.whiteColor};
	font-size: 1.1rem;
`;

export const Button = styled.a`
	display: block;

	&:hover {
		${ButtonIcon} {
			background-color: ${Variables.Colors.mainColor};
			border-color: ${Variables.Colors.mainColor};
		}
	}
`;

export const CardInfo = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	transform: translateY(100%);
	width: 100%;
	background-color: ${Variables.Colors.secondBackgroundColor};
	padding: 20px 20px 10px 20px;
	opacity: 0;
	z-index: -1;
	transition: all 0.2s linear;
`;

export const Box = styled.div``;

export const Title = styled.h4`
	color: ${Variables.Colors.whiteColor};
	margin: 0;
`;

export const Description = styled.p`
	color: ${Variables.Colors.textColor};
	line-height: 1.6;
	font-size: 0.9rem;
`;

export const TechTitle = styled.h4`
	color: ${Variables.Colors.whiteColor};
	margin-bottom: 5px;
`;

export const TechList = styled.ul`
	padding: 0;
	margin-bottom: 0;
`;

export const TechItem = styled.li`
	color: ${Variables.Colors.textColor};
	border: 1px solid ${Variables.Colors.whiteColor};
	display: inline-block;
	text-align: center;
	padding: 5px 10px;
	font-size: 0.9rem;
	margin-right: 10px;
	margin-bottom: 10px;
`;

export const Card = styled.div`
	position: relative;

	&::before {
		content: "";
		transition: all 0.2s linear;
		opacity: 0;
		${Functions.overlay(null, "linear-gradient(to top, #000, transparent, transparent)")}
	}

	&:hover {
		&::before {
			opacity: 1;
		}

		${Buttons} {
			opacity: 1;
		}

		${CardInfo} {
			opacity: 1;
			z-index: 5;
		}
	}

	&:nth-of-type(odd) {
		${Functions.backgroundImage("/images/projects/templates/Apple.png")}
	}

	&:nth-of-type(even) {
		${Functions.backgroundImage("/images/projects/templates/Agency.png")}
	}
`;

export const Go = styled(Link)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
`;
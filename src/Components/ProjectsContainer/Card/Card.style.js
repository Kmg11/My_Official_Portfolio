import styled from "styled-components";
import { Link } from "react-router-dom";
import { Functions, Variables } from "../../../Style";
import { Images } from "../../../Constants";

export const Buttons = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 0;
	z-index: 4;
	width: max-content;
	opacity: 0;
	visibility: hidden;
	transition: all 0.2s linear;
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
	z-index: 0;
	visibility: hidden;
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
	margin-top: 1rem;
`;

export const TechTitle = styled.h4`
	color: ${Variables.Colors.whiteColor};
	margin-bottom: 5px;
`;

export const TechList = styled.ul`
	margin-top: 1rem;
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

export const Card = styled.div`
	width: 100%;
	height: 30vh;
	position: relative;
	transition: all 0.2s linear;
	${Functions.backgroundImage(`${Images.TEMPLATES}/Apple.png`)}

	&::before {
		content: "";
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s linear;
		${Functions.overlay(
			null,
			"linear-gradient(to top, #000, transparent, transparent)"
		)}
	}

	&:hover,
	&:focus {
		transform: scale(1.1) translateY(-8px);
		z-index: 5;

		&::before {
			visibility: visible;
			opacity: 1;
		}

		${Buttons} {
			opacity: 1;
			visibility: visible;
		}

		${CardInfo} {
			opacity: 1;
			z-index: 5;
			visibility: visible;
		}
	}
`;

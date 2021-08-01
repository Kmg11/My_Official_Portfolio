import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Variables } from "../../Style";

export const Banner = styled.section`
	width: max-content;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 20px;
	place-items: center;
`;

export const ImageContainer = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	background-color: ${Variables.Colors.backgroundColor};
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Info = styled.div``;

export const Name = styled.h1`
	color: ${Variables.Colors.titlesColor};
	margin: 0;
`;

export const Description = styled.p`
	color: ${Variables.Colors.whiteColor};
	font-size: 1.2rem;
	font-weight: bold;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 300px;
	line-height: 1.7;
`;

export const SocialLinks = styled.ul`
	padding: 0;
	margin: 0;
`;

export const Item = styled.li`
	display: inline-block;

	&:not(:last-of-type) {
		margin-right: 10px;
	}
`;

export const ItemLink = styled.a`
	color: ${Variables.Colors.whiteColor};
	font-size: 2rem;
	display: block;
	transition: all 0.2s linear;

	/* This Code For Handling Hover Problem With Svg */
	width: 25px;
	height: 25px;
	border-radius: 5px;

	/* This Code For Handling Hover Problem With Svg */
	svg {
		position: relative;
		top: -4px;
		left: -1px;
	}

	&:hover {
		color: ${Variables.Colors.mainColor};
		background-color: ${Variables.Colors.whiteBackgroundColor};
	}
`;

export const NextBtn = styled.div`
	text-align: center;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 20px;
	place-items: center;
	place-content: center;
`;

export const Button = styled(Link)`
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

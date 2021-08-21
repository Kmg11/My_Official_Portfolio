import styled from "styled-components";
import { Functions, Variables } from "../../Style";

export const Banner = styled.section`
	width: max-content;

	${Functions.mediaBreakpointDown("xs")} {
		width: 100%;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1.25rem;
	place-items: center;

	${Functions.mediaBreakpointDown("sm")} {
		grid-template-columns: 1fr;
		justify-content: center;
		text-align: center;
	}
`;

export const ImageContainer = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	background-color: ${Variables.Colors.backgroundColor};
`;

export const Info = styled.div``;

export const Name = styled.h1`
	color: ${Variables.Colors.titlesColor};
`;

export const Description = styled.p`
	color: ${Variables.Colors.whiteColor};
	font-size: 1.2rem;
	font-weight: 700;
	margin-top: 0.625rem;
	margin-bottom: 0.625rem;
	width: 300px;
	line-height: 1.7;

	${Functions.mediaBreakpointDown("xs")} {
		width: 100%;
	}
`;

export const SocialLinks = styled.ul``;

export const Item = styled.li`
	display: inline-block;

	&:not(:last-of-type) {
		margin-right: 10px;
	}
`;

export const Link = styled.a`
	color: ${Variables.Colors.whiteColor};
	font-size: 2rem;
	display: block;
	transition-property: color, background-color;
	transition: 0.2s linear;

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

	&:hover,
	&:focus {
		color: ${Variables.Colors.mainColor};
		background-color: ${Variables.Colors.whiteBackgroundColor};
	}
`;

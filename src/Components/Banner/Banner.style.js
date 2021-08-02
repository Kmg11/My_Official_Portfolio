import styled from "styled-components";
import { Variables } from "../../Style";

export const Banner = styled.section`
	width: max-content;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 20px;
	place-items: center;

	@media (max-width: 600px) {
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

	@media (max-width: 600px) {
		width: 200px;
		height: 200px;
	}
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

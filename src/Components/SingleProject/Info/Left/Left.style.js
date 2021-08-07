import styled from "styled-components";
import { Variables } from "../../../../Style";

export const Left = styled.section``;

export const Images = styled.section`
	margin-bottom: 3rem;
`;

export const ImagesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

export const Title = styled.h3`
	text-transform: capitalize;
	color: ${Variables.Colors.titlesColor};
	margin-top: 0;
`;

export const ImageContainer = styled.div`
	background-color: ${Variables.Colors.secondBackgroundColor};
	padding: 5px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Technologies = styled.section``;

export const TechnologiesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem;
`;

export const Technology = styled.a`
	color: ${Variables.Colors.whiteColor};
	padding: 20px;
	background-color: ${Variables.Colors.secondBackgroundColor};
	text-align: center;
	text-transform: capitalize;
	cursor: pointer;
	transition: all 0.2s linear;

	&:hover {
		background-color: ${Variables.Colors.mainColor};
	}
`;
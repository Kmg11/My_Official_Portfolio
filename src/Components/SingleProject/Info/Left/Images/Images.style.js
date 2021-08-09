import styled from "styled-components";
import { Variables } from "../../../../../Style";

export const Images = styled.section``;

export const ImagesList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ImageItem = styled.li`
	background-color: ${Variables.Colors.secondBackgroundColor};
	border: 4px solid ${Variables.Colors.secondBackgroundColor};
	cursor: pointer;
	overflow: hidden;
	
	&:hover,
	&:focus {
		transition: border 0.2s linear;
		border-color: ${Variables.Colors.mainColor};

		${Image} {
			transition: transform 0.2s linear;
			transform: scale(1.1);
		}
	}
`;

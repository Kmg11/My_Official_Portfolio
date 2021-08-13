import styled from "styled-components";
import { Functions } from "../../../../../Style";

export const Images = styled.section`
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1frem;

		${Functions.mediaBreakpointDown("md")} {
			grid-template-columns: 1fr;
		}
	}
`;

export const ImageContainer = styled.div`
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
`;

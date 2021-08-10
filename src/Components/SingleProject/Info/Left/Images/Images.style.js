import styled from "styled-components";

export const Images = styled.section`
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1frem;
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

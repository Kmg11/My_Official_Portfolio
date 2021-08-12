import styled from "styled-components";
import { Functions } from "../../../Style";

export const ImageContainer = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;

	${Functions.mediaBreakpointDown('sm')} {
		width: 50px;
		height: 50px;
	}
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

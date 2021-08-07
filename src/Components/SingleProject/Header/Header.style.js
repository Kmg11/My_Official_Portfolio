import styled from "styled-components";
import { Functions, Variables } from "../../../Style";

export const Header = styled.header`
	width: 100%;
	height: 50vh;
	position: relative;

	&::before {
		content: "";
		${Functions.overlay(Variables.Colors.backgroundOverlay2)}
	}
`;

export const CoverImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: absolute;
	top: 50%;
	left: 40px;
	transform: translateY(-50%);
	z-index: 2;
`;

export const ProjectName = styled.h1`
	color: ${Variables.Colors.titlesColor};
	text-transform: capitalize;
	margin-top: 0;
	margin-bottom: 10px;
`;

export const SmallDescription = styled.p`
	color: ${Variables.Colors.whiteColor};
	width: 400px;
	line-height: 1.7;
	margin-top: 0;
	margin-bottom: 10px;
`;

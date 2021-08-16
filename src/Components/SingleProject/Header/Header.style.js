import styled from "styled-components";
import { Functions, Variables } from "../../../Style";

export const Header = styled.header`
	width: 100%;
	height: 50vh;
	position: relative;
	display: grid;
	align-items: center;

	&::before {
		content: "";
		z-index: 2;
		${Functions.overlay(Variables.Colors.backgroundOverlay2)}
	}
`;

export const CoverImage = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: relative;
	z-index: 2;
	padding-left: 1.5rem;
	padding-right: 1.5rem;

	${Functions.mediaBreakpointDown("sm")} {
		padding-left: 0;
		padding-right: 0;
	}

	${Functions.mediaBreakpointOnly("md")} {
		padding-left: 1rem;
		padding-right: 1rem;
	}
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

	${Functions.mediaBreakpointDown("xs")} {
		width: 100%;
	}
`;

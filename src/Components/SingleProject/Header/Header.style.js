import styled from "styled-components";
import { Functions, Variables } from "../../../Style";

export const Header = styled.header`
	width: 100%;
	min-height: 500px;
	height: 100vh;
	position: relative;
	display: grid;
	align-items: center;

	&::before {
		content: "";
		z-index: 2;
		${Functions.overlay(null, "linear-gradient(to right, #000, transparent)")}
	}

	${Functions.mediaBreakpointDown("sm")} {
		height: calc(100vh - ${(props) => props.navbarHeight});
	}
`;

export const CoverImage = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;

export const Content = styled.div`
	position: relative;
	z-index: 2;
	display: grid;
	gap: 1rem;
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

export const Badge = styled.h5`
	color: ${Variables.Colors.whiteColor};
	background-color: ${Variables.Colors.secondBackgroundColor};
	width: max-content;
	padding: 6px 7px 6px 15px;
	border-left: 3px solid ${Variables.Colors.mainColor};
	cursor: default;
	user-select: none;
	text-align: center;
	font-size: 0.8rem;
	font-weight: 300;
	line-height: 1;
	text-transform: uppercase;
	letter-spacing: 8px;
`;

export const Name = styled.h1`
	color: ${Variables.Colors.titlesColor};
	text-transform: capitalize;
`;

export const Description = styled.p`
	color: ${Variables.Colors.whiteColor};
	width: 400px;
	line-height: 1.5;

	${Functions.mediaBreakpointDown("xs")} {
		width: 100%;
	}
`;

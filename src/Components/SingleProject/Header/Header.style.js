import styled from "styled-components";
import { Functions } from "../../../Style";

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

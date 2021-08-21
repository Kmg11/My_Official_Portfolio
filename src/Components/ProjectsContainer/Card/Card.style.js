import styled from "styled-components";
import { Functions } from "../../../Style";
import { Buttons } from "./Buttons/Buttons.style";
import { Info } from "./Info/Info.style";

export const Card = styled.div`
	width: 100%;
	height: 190px;
	position: relative;
	transition-property: z-index, transform;
	transition: 0.2s linear;

	&::before {
		content: "";
		opacity: 0;
		visibility: hidden;
		transition-property: visibility, opacity;
		transition: 0.2s linear;
		z-index: 2;
		${Functions.overlay(
			null,
			"linear-gradient(to top, #000, transparent, transparent)"
		)}
	}

	&:hover,
	&:focus {
		transform: scale(1.1) translateY(-8px);
		z-index: 5;

		${Functions.mediaBreakpointDown("sm")} {
			transform: scale(1) translateY(-8px);
		}

		&::before {
			visibility: visible;
			opacity: 1;
		}

		${Buttons} {
			opacity: 1;
			visibility: visible;
		}

		${Info} {
			z-index: 5;
			opacity: 1;
			visibility: visible;
		}
	}
`;

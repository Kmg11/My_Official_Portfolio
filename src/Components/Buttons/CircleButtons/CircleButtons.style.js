import styled from "styled-components";
import { Variables } from "../../../Style";

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 20px;
	justify-content: start;
	align-items: center;
`;

export const ButtonIcon = styled.span`
	color: ${Variables.Colors.whiteColor};
	width: 40px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	border: 1px solid ${Variables.Colors.whiteColor};
	border-radius: 50%;
	font-size: 1rem;
	transition-property: background-color, border-color;
	transition: 0.2s linear;
`;

export const ButtonName = styled.span`
	color: ${Variables.Colors.whiteColor};
	font-size: 1.1rem;
	text-transform: capitalize;
`;

export const Button = styled.a`
	display: grid;
	grid-template-columns: repeat(2, auto);
	place-items: center;
	gap: 10px;

	&:hover,
	&:focus {
		${ButtonIcon} {
			background-color: ${Variables.Colors.mainColor};
			border-color: ${Variables.Colors.mainColor};
		}
	}
`;

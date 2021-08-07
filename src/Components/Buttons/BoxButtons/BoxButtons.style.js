import styled, { css } from "styled-components";
import { Variables } from "../../../Style";

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: repeat(${(props) => props.numberOfButtons}, auto);
	gap: 20px;
	justify-content: start;
	align-items: center;
`;

export const Button = styled.button`
	font-size: 1.2rem;
	padding: 20px 40px;	background-color: ${Variables.Colors.secondBackgroundColor};
	color: ${Variables.Colors.whiteColor};
	font-size: 1rem;
	display: block;
	transition: all 0.2s linear;
	text-transform: capitalize;

	&:hover,
	&:focus {
		background-color: ${Variables.Colors.mainColor};
	}

	${(props) =>
		props.active &&
		css`
			background-color: ${Variables.Colors.mainColor};
		`}
`;

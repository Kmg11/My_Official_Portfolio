import styled, { css } from "styled-components";
import { Functions, Variables } from "../../../Style";

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: repeat(${(props) => props.numberOfButtons}, auto);
	gap: 1.2rem;
	justify-content: start;
	align-items: center;

	${Functions.mediaBreakpointDown("xs")} {
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}
`;

export const Button = styled.button`
	font-size: 1.2rem;
	padding: 20px 40px;
	background-color: ${Variables.Colors.secondBackgroundColor};
	color: ${Variables.Colors.whiteColor};
	font-size: 1rem;
	display: block;
	transition: background-color 0.2s linear;
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

	${Functions.mediaBreakpointDown("xs")} {
		${(props) =>
			props.numberOfButtons % 2 !== 0 &&
			css`
				padding: 20px 30px;

				&:last-of-type {
					grid-column: 1 / 3;
				}
			`}
	}
`;

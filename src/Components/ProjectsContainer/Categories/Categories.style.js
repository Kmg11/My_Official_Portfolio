import styled, { css } from "styled-components";
import { Variables } from "../../../Style";

export const Categories = styled.section`
	margin-bottom: 3rem;
`;

export const Button = styled.button`
	font-size: 1.2rem;
	width: 130px;
	height: 50px;
	background-color: ${Variables.Colors.secondBackgroundColor};
	color: ${Variables.Colors.whiteColor};
	font-size: 1rem;
	display: inline-block;
	transition: all 0.2s linear;

	&:hover,
	&:focus {
		background-color: ${Variables.Colors.mainColor};
	}

	${(props) =>
		props.active &&
		css`
			background-color: ${Variables.Colors.mainColor};
		`}

	&:not(:last-of-type) {
		margin-right: 20px;
	}
`;

import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { Functions, Variables } from "../../../Style";

export const List = styled.ul`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	${Functions.mediaBreakpointDown("sm")} {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		transform: none;
		min-height: 500px;
		height: 100vh;
		width: 250px;
		padding: 40px 15px;
		background-color: rgba(28, 38, 49, 0.95);
		transform: translateX(-100%);
		z-index: 1001;
		transition-property: transform, opacity;
		transition: 0.3s linear;

		${(props) =>
			props.isOpen &&
			css`
				transform: translateX(0);
			`}
	}
`;

export const Item = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 30px;
	}
`;

export const Name = styled.span`
	position: absolute;
	top: 50%;
	right: 0;
	z-index: 3;
	transform: translate(10%, -50%);
	background-color: ${Variables.Colors.whiteBackgroundColor};
	padding: 8px 10px;
	border-radius: 10px;
	font-size: 0.9rem;
	display: block;
	font-weight: 500;
	opacity: 0;
	width: 80px;
	text-transform: capitalize;
	transition-property: opacity, transform;
	transition: 0.25s linear;

	${Functions.mediaBreakpointDown("sm")} {
		position: static;
		transform: none;
		background-color: transparent;
		opacity: 1;
		width: auto;
		padding: 0;
	}
`;

export const Icon = styled.span`
	display: block;
	font-size: 1.2rem;

	${Functions.mediaBreakpointDown("sm")} {
		font-size: 1rem;
	}
`;

export const Link = styled(NavLink)`
	position: relative;
	display: block;
	color: ${Variables.Colors.textColor};
	width: 55px;
	height: 55px;
	border-radius: 50%;
	display: grid;
	place-items: center;
	transition-property: color, background-color;
	transition: 0.25s linear;
	margin: auto;

	&:hover,
	&:focus,
	&.active {
		color: ${Variables.Colors.mainColor};
		background-color: ${Variables.Colors.whiteBackgroundColor};
	}

	&:hover,
	&:focus {
		${Name} {
			opacity: 1;
			transform: translate(120%, -50%);
		}
	}

	${Functions.mediaBreakpointDown("sm")} {
		display: grid;
		grid-template-columns: repeat(2, auto);
		gap: 10px;
		justify-content: start;
		border-radius: 10px;
		width: auto;
		height: auto;
		padding: 20px;

		&.active {
			color: ${Variables.Colors.whiteColor};
			background-color: ${Variables.Colors.mainColor};
		}

		&:hover,
		&:focus {
			color: ${Variables.Colors.whiteColor};
			background-color: ${Variables.Colors.mainColor};

			${Name} {
				opacity: 1;
				transform: none;
				color: ${Variables.Colors.whiteColor};
			}
		}
	}
`;

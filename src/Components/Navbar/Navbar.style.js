import styled, { css } from "styled-components";
import { Variables, Functions } from "../../Style";

export const Navbar = styled.nav`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	min-height: 500px;
	max-height: 100%;
	background-color: ${Variables.Colors.mainColor};
	padding: 20px;
	text-align: center;
	z-index: 1000;

	${Functions.mediaBreakpointDown("sm")} {
		bottom: auto;
		right: 0;
		min-height: 0;
		max-height: none;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, auto);
		justify-content: space-between;
		align-items: center;
		padding: 15px 20px;
		transition: margin-left 0.3s linear;

		${(props) =>
			props.isOpen &&
			css`
				margin-left: ${props.listWidth}px;
			`}
	}
`;

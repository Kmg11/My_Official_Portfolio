import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Variables, Functions } from "../../Style";

export const Navbar = styled(motion.nav)`
	position: relative;
	min-height: 500px;
	height: 100%;
	max-height: 100%;
	background-color: ${Variables.Colors.mainColor};
	padding: 20px;
	text-align: center;
	z-index: 1000;

	${Functions.mediaBreakpointDown("sm")} {
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
				margin-left: 200px;
			`}
	}
`;

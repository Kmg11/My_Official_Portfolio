import styled from "styled-components";
import { motion } from "framer-motion";
import { Variables } from "../../../../Style";

export const Badge = styled(motion.h5)`
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

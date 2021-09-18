import styled from "styled-components";
import { motion } from "framer-motion";
import { Variables } from "../../../Style";

export const Description = styled(motion.p)`
	color: ${Variables.Colors.whiteColor};
	font-size: 1.125rem;
	font-weight: 300;
	margin-top: 0.225rem;
	margin-bottom: 0.625rem;
	line-height: 1.7;
`;

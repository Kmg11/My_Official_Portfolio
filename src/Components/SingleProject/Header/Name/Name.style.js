import styled from "styled-components";
import { motion } from "framer-motion";
import { Variables } from "../../../../Style";

export const Name = styled(motion.h1)`
	color: ${Variables.Colors.titlesColor};
	text-transform: capitalize;
	width: max-content;
`;

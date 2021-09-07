import { motion } from "framer-motion";
import styled from "styled-components";
import { Functions } from "../../Style";

export const Home = styled.section`
	position: relative;
	min-height: 100vh;
	${Functions.center("grid")};
	overflow: hidden;

	&::before {
		content: "";
		z-index: 2;
		${Functions.overlay(null, "linear-gradient(to right, #000, transparent)")};
	}
`;

export const Content = styled(motion.div)`
	z-index: 3;
`;

export const CoverImage = styled(motion.div)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;

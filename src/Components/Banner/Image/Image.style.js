import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Variables } from '../../../Style';

export const ImageContainer = styled(motion.div)`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	overflow: hidden;
	background-color: ${Variables.Colors.backgroundColor};
`;

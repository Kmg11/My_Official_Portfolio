import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Components, Functions } from '../../../Style';

export const ImageContainer = styled(motion.div)`
	width: 60px;
	height: 60px;
	border-radius: 50%;
	overflow: hidden;

	${Functions.mediaBreakpointDown('sm')} {
		width: 50px;
		height: 50px;
	}
`;

export const Image = styled(Components.ImageCover)``;

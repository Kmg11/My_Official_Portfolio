import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Functions } from '../../../Style';

export const Categories = styled(motion.section)`
	margin-bottom: 3rem;

	${Functions.mediaBreakpointDown('xs')} {
		margin-bottom: 2rem;
	}
`;

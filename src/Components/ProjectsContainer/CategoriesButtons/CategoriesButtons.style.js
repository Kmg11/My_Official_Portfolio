import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Categories = styled(motion.section)`
	margin-bottom: 3rem;

	${(p) => p.theme.breakpoints.down('xs')} {
		margin-bottom: 2rem;
	}
`;

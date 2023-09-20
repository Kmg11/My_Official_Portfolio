import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Functions } from '../../Style';

export const ProfileContainer = styled(motion.section)`
	padding: 2.5rem 1.5rem;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	${Functions.mediaBreakpointDown('sm')} {
		padding: 2.5rem 0 2.5rem;
	}

	${Functions.mediaBreakpointOnly('md')} {
		padding: 2.5rem 1rem;
	}
`;

export const BannerContainer = styled.div`
	margin: auto;
	width: fit-content;
	margin-bottom: 1.5rem;
	margin-top: 2rem;
`;

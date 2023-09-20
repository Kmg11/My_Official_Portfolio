import styled from 'styled-components';
import { Functions } from '../../../Style';

const GAP = '2rem';

export const Info = styled.section`
	padding: 2.5rem 1.5rem;

	${Functions.mediaBreakpointOnly('md')} {
		padding: 2.5rem 1rem;
	}

	${Functions.mediaBreakpointDown('sm')} {
		padding: 2.5rem 0 2.5rem;
	}
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.5fr;
	gap: ${GAP};
	margin-top: ${GAP};

	${Functions.mediaBreakpointDown('md')} {
		grid-template-columns: repeat(2, 1fr);
	}

	${Functions.mediaBreakpointDown('xs')} {
		grid-template-columns: 1fr;
	}
`;

export const SideGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: ${GAP};
`;

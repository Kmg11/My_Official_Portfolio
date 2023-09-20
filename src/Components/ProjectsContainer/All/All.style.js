import styled from 'styled-components';
import { Functions } from '../../../Style';

export const Cards = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;

	@media (min-width: 1400px) {
		grid-template-columns: repeat(4, 1fr);
	}

	${Functions.mediaBreakpointDown('md')} {
		grid-template-columns: repeat(2, 1fr);
	}

	${Functions.mediaBreakpointDown('xs')} {
		grid-template-columns: 1fr;
	}
`;

import styled from "styled-components";
import { Functions } from "../../Style";

export const Banner = styled.section`
	max-width: max-content;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1.25rem;
	place-items: center;

	${Functions.mediaBreakpointDown("sm")} {
		grid-template-columns: 1fr;
		justify-content: center;
		text-align: center;
	}
`;

export const Info = styled.div`
	min-width: 250px;
	max-width: 300px;
`;

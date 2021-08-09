import styled from "styled-components";

const GAP = "2rem";

export const Info = styled.section`
	padding: 2.5rem;
	display: grid;
	grid-template-columns: 1fr 0.5fr;
	gap: ${GAP};
`;

export const SideGrid = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: ${GAP};
`;

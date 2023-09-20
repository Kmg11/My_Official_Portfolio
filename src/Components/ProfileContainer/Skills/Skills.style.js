import styled from 'styled-components';

export const Skills = styled.section`
	text-transform: capitalize;

	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
		gap: 1rem;
	}
`;

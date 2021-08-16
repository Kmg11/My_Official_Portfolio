import styled from "styled-components";
import { Functions } from "../../Style";

export const ProjectsContainer = styled.section`
	overflow: hidden;
	padding: 2.5rem 2.5rem 20rem;

	${Functions.mediaBreakpointDown("sm")} {
		padding: 2.5rem 1.5rem 20rem;
	}
`;

export const Categories = styled.section`
	margin-bottom: 3rem;

	${Functions.mediaBreakpointDown("xs")} {
		margin-bottom: 2rem;
	}
`;

import styled from "styled-components";
import { Functions } from "../../Style";

export const ProjectsContainer = styled.section`
	padding: 2.5rem 1.5rem;

	${Functions.mediaBreakpointDown("sm")} {
		padding: 2.5rem 0 2.5rem;
	}

	${Functions.mediaBreakpointOnly("md")} {
		padding: 2.5rem 1rem;
	}
`;

export const Categories = styled.section`
	margin-bottom: 3rem;
`;

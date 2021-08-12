import styled from "styled-components";
import { Functions } from "../../../Style";

export const Languages = styled.section`
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;

		${Functions.mediaBreakpointDown("xs")} {
			grid-template-columns: repeat(1, 1fr);
		}
	}
`;

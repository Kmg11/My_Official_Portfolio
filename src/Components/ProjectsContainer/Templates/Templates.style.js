import styled from "styled-components";
import { Functions } from "../../../Style";

export const Cards = styled.section`
	display: grid;
	gap: 20px;

	${Functions.mediaBreakpointDown("xl")} {
		grid-template-columns: repeat(4, 1fr);
	}

	${Functions.mediaBreakpointDown("lg")} {
		grid-template-columns: repeat(3, 1fr);
	}

	${Functions.mediaBreakpointDown("md")} {
		grid-template-columns: repeat(2, 1fr);
	}

	${Functions.mediaBreakpointDown("xs")} {
		grid-template-columns: 1fr;
	}
`;

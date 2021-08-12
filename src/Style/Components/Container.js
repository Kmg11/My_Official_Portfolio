import styled from "styled-components";
import { Functions } from "../";

export const Container = styled.div`
	position: relative;
	margin: auto;
	padding-left: 1rem;
	padding-right: 1rem;

	${Functions.mediaBreakpointUp("xl")} {
		width: 1170px;
	}
`;

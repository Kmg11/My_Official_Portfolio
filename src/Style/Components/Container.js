import styled from "styled-components";
import { Functions } from "../";

export const Container = styled.div`
	margin: auto;
	padding-left: 1rem;
	padding-right: 1rem;
	width: 100%;
	display: block;

	${Functions.mediaBreakpointUp("xl")} {
		width: 1170px;
	}
`;

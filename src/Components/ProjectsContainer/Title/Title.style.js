import styled from "styled-components";
import { Variables } from "../../../Style";

export const Title = styled.h1`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 20px;
	align-items: center;
	margin: 0;
`;

export const TitleIcon = styled.span`
	color: ${Variables.Colors.mainColor};
`;

export const TitleName = styled.span`
	color: ${Variables.Colors.titlesColor};
`;

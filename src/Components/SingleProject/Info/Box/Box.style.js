import styled from "styled-components";
import { Variables } from "../../../../Style";

export const List = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	align-items: start;
	gap: 1rem;
`;

export const Icon = styled.span`
	color: ${Variables.Colors.mainColor};
`;

export const Item = styled.li`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 15px;
	align-items: center;
	padding: 15px;
	background-color: ${Variables.Colors.secondBackgroundColor};
	border-left: 5px solid ${Variables.Colors.mainColor};

	&:hover {
		${Icon} {
			transition: color 0.2s linear;
			color: ${Variables.Colors.whiteColor};
		}
	}
`;

export const Text = styled.p`
	color: ${Variables.Colors.whiteColor};
	margin: 0;
	line-height: 1.6;
`;

import styled from "styled-components";
import { Variables } from "../../../Style";

export const Categories = styled.section`
	padding-top: 30px;
	padding-bottom: 30px;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 30px;
	place-items: center;
	place-content: center;
`;

export const Button = styled.button`
	font-size: 1.2rem;
	border-radius: 50%;
	width: 70px;
	height: 70px;
	background-color: #333;
	display: block;
`;

export const Icon = styled.span`
	color: ${Variables.Colors.whiteColor};
	display: block;
	margin-bottom: 8px;
`;

export const Name = styled.span`
	color: ${Variables.Colors.whiteColor};
	display: block;
`;

import styled from "styled-components";
import { Variables } from "../../../../Style";

export const Info = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	transform: translateY(100%);
	width: 100%;
	background-color: ${Variables.Colors.secondBackgroundColor};
	padding: 1.25rem;
	opacity: 0;
	visibility: hidden;
	z-index: 0;
	transition-property: visibility, opacity, z-index;
	transition: 0.2s linear;
	display: grid;
	gap: 1.2rem;
`;

export const Box = styled.div`
	display: grid;
	gap: 1rem;
`;

export const Title = styled.h4`
	color: ${Variables.Colors.whiteColor};
	text-transform: capitalize;
`;

export const Description = styled.p`
	color: ${Variables.Colors.textColor};
	line-height: 1.6;
	font-size: 0.9rem;
`;

export const List = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: -0.625rem;
	margin-left: -0.3125rem;
	margin-right: -0.3125rem;
`;

export const Item = styled.li`
	color: ${Variables.Colors.textColor};
	border: 1px solid ${Variables.Colors.whiteColor};
	text-align: center;
	padding: 5px 15px;
	font-size: 0.9rem;
	margin-bottom: 0.625rem;
	margin-right: 0.3125rem;
	margin-left: 0.3125rem;
	cursor: pointer;
	transition-property: border-color, background-color;
	transition-duration: 0.2s;

	&:hover,
	&:focus {
		background-color: ${Variables.Colors.mainColor};
		border-color: ${Variables.Colors.mainColor};
	}
`;

import styled from "styled-components";
import {
	backgroundColor,
	backgroundOverlay,
} from "../../Style/Variables/Colors";
import { overlay } from "../../Style/Functions";

export const HomeStyle = styled.section`
	position: relative;
	background-color: ${backgroundColor};
	background-image: url("/images/home/background.webp");
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	min-height: 100vh;

	&::before {
		content: "";
		${overlay(backgroundOverlay)};
	}
`;

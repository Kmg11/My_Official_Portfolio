import styled from "styled-components";
import { Variables } from "../../../Style";

export const Slider = styled.section`
	position: relative;
	margin-bottom: 2rem;
	width: 100%;

	&:hover,
	&:focus {
		z-index: 5;
	}

	.swiper-container {
		overflow: visible;

		.swiper-button-prev,
		.swiper-button-next {
			top: 0;
			bottom: 0;
			background-color: rgba(15, 23, 30, 0.5);
			width: 40px;
			height: 100%;
			margin-top: 0;
			transition: all 0.2s linear;

			&:after {
				color: ${Variables.Colors.whiteColor};
				font-size: 1.9rem;
			}

			&:hover,
			&:focus {
				background-color: rgba(15, 23, 30, 0.75);
			}
		}

		.swiper-button-prev {
			left: 0;
			transform: translateX(-40px);
		}

		.swiper-button-next {
			right: 0;
			transform: translateX(40px);
		}

		.swiper-button-disabled {
			opacity: 0;
			visibility: hidden;
		}
	}
`;

export const SeeMore = styled.button`
	width: 100%;
	height: 30vh;
	display: block;
	background-color: ${Variables.Colors.secondBackgroundColor};
	color: ${Variables.Colors.textColor};
	display: grid;
	place-items: center;
	font-size: 1.2rem;
	cursor: pointer;
	transition: all 0.2s linear;

	&:hover,
	&:focus {
		transform: scale(1.1) translateY(-8px);
		z-index: 5;
	}
`;

import styled from "styled-components";
import { Components, Variables } from "../../../../Style";

export const Slider = styled.section``;

export const SwiperContainer = styled.div`
	position: relative;
	background-color: ${Variables.Colors.secondBackgroundColor};
	padding: 1rem;

	.swiper-slide {
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.main-sider {
		height: 100%;
		width: 100%;
	}

	.small-slider {
		height: 20%;
		padding-top: 1rem;
		width: 100%;
	}

	.small-slider .swiper-slide {
		width: 25%;
		height: 100%;
		opacity: 0.5;
		transition-property: opacity;
		transition: 0.2s linear;
	}

	.small-slider .swiper-slide-thumb-active {
		opacity: 1;
	}
`;

export const Image = styled(Components.ImageCover)``;

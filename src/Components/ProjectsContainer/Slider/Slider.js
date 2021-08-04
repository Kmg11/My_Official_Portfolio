import { Card } from "../Card/Card";
import * as Style from "./Slider.style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, A11y, Keyboard } from "swiper/core";

// Import Swiper Style
import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([Navigation, A11y, Keyboard]);

export function Slider({ navWidthState }) {
	return (
		<Style.Slider>
			<Style.Title>Templates</Style.Title>

			{/* This Check For Handle Dynamic Dynamic Padding Left Of The Container */}
			{navWidthState && (
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					slidesPerGroup={1}
					keyboard={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1000: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						1400: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
					navigation
				>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Card />
					</SwiperSlide>
					<SwiperSlide>
						<Style.SeeMore>See More</Style.SeeMore>
					</SwiperSlide>
				</Swiper>
			)}
		</Style.Slider>
	);
}

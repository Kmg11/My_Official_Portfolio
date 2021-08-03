import { Card } from "../Card/Card";
import * as Style from "./Slider.style";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Keyboard } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, A11y, Keyboard]);

export function Slider() {
	return (
		<Style.Slider>
			<Style.Title>Templates</Style.Title>

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
		</Style.Slider>
	);
}

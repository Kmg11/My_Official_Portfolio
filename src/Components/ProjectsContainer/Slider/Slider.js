import { Card } from "../Card/Card";
import * as Style from "./Slider.style";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Navigation, A11y, Keyboard } from "swiper/core";

// Import Swiper Style
import "swiper/swiper-bundle.min.css";
import { useSelector } from "react-redux";
import { Components } from "../../../Style";

// install Swiper modules
SwiperCore.use([Navigation, A11y, Keyboard]);

export function Slider({ data, setProjectsPage, pageType }) {
	const navbarWidth = useSelector((state) => state.navbarSize.width);

	const slideList = data.map((item) => {
		return (
			<SwiperSlide key={item.id}>
				<Card info={item} />
			</SwiperSlide>
		);
	});

	return (
		<Style.Slider>
			<Components.SubTitle>{data[0].type}s</Components.SubTitle>

			{/* This Check For Handle Dynamic Padding Left Of The Container */}
			{navbarWidth && (
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					slidesPerGroup={1}
					keyboard={true}
					navigation={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						700: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						1100: {
							slidesPerView: 3,
							spaceBetween: 10,
						},
						1400: {
							slidesPerView: 4,
							spaceBetween: 20,
						},
					}}
				>
					{slideList}
					<SwiperSlide>
						<Style.SeeMore onClick={() => setProjectsPage(pageType)}>
							See More
						</Style.SeeMore>
					</SwiperSlide>
				</Swiper>
			)}
		</Style.Slider>
	);
}

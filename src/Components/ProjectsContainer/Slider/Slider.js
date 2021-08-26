import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
import { Components } from "../../../Style";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Keyboard } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import * as Style from "./Slider.style";

// install Swiper modules
SwiperCore.use([Navigation, A11y, Keyboard]);

export function Slider({ data, page }) {
	const { setProjectsPage, pageType } = page;
	const navbarWidth = useSelector((state) => state.navbarSize.width);

	const slideList = data.map((item) => {
		return (
			<SwiperSlide key={item.id}>
				<Card data={item} />
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
						0: { slidesPerView: 1, spaceBetween: 10 },
						700: { slidesPerView: 2, spaceBetween: 10 },
						1100: { slidesPerView: 3, spaceBetween: 10 },
						1400: { slidesPerView: 4, spaceBetween: 20 },
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

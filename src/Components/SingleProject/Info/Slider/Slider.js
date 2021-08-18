import React, { useState } from "react";
import { Images } from "../../../../Constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/thumbs/thumbs.min.css";
import * as Style from "./Slider.style";

// import Swiper core and required modules
import SwiperCore, { Thumbs } from "swiper/core";
import { Components } from "../../../../Style";

// install Swiper modules
SwiperCore.use([Thumbs]);

export function Slider() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<Style.Slider>
			<Components.SubTitle>Images</Components.SubTitle>

			<Style.SwiperContainer>
				<Swiper
					spaceBetween={10}
					thumbs={{ swiper: thumbsSwiper }}
					className="main-sider"
				>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
				</Swiper>

				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={16}
					slidesPerView={4}
					freeMode={true}
					watchSlidesVisibility={true}
					watchSlidesProgress={true}
					className="small-slider"
					breakpoints={{
						0: {
							slidesPerView: 2,
						},
						700: {
							slidesPerView: 3,
						},
						1100: {
							slidesPerView: 4,
						},
					}}
				>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
					<SwiperSlide>
						<Style.Image src={`${Images.TEMPLATES}/Agency.png`} alt="" />
					</SwiperSlide>
				</Swiper>
			</Style.SwiperContainer>
		</Style.Slider>
	);
}

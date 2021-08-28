import { useContext, useState } from "react";
import { Images } from "../../../../Constants";
import { CreateImage } from "../../../CreateImage/CreateImage";
import { ProjectContext } from "../../SingleProject";
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
	const {
		project: { title, images },
	} = useContext(ProjectContext);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	let imagesList = [...Array(images.number_of_images).keys()].map((item) => {
		return (
			<SwiperSlide key={item}>
				<CreateImage
					src={`${Images.PROJECTS}/${images.folder_name}/${item + 1}`}
					alt={`${title} Image`}
				/>
			</SwiperSlide>
		);
	});

	return (
		<Style.Slider>
			<Components.SubTitle>Images</Components.SubTitle>

			<Style.SwiperContainer>
				<Swiper
					spaceBetween={10}
					thumbs={{ swiper: thumbsSwiper }}
					className="main-sider"
				>
					{imagesList}
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
					{imagesList}
				</Swiper>
			</Style.SwiperContainer>
		</Style.Slider>
	);
}
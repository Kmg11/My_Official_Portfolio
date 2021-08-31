import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Components } from "../../../../Style";
import { Card } from "../../Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Keyboard } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import * as Style from "./Slider.style";

// install Swiper modules
SwiperCore.use([Navigation, A11y, Keyboard]);

export function Slider({ response, page }) {
	const { data, isPending } = response;
	const { setProjectsPage, pageType } = page;

	const navbarWidth = useSelector((state) => state.navbarSize.width);
	const topProjects = data && data.filter((project) => project.is_top);

	const slideList =
		data &&
		topProjects.map((item) => {
			return (
				<SwiperSlide key={item.id}>
					<Card data={item} />
				</SwiperSlide>
			);
		});

	return (
		<Style.Slider>
			<Components.SubTitle>
				{isPending && <Components.SkeletonLoadingText head width="100px" />}
				{data && data[0].type}
			</Components.SubTitle>

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
					{isPending &&
						[...new Array(4).keys()].map((item) => {
							return (
								<SwiperSlide key={item}>
									<Components.SkeletonLoadingBox height="190px" />
								</SwiperSlide>
							);
						})}

					{slideList}

					<SwiperSlide>
						<Style.SeeMore
							onClick={() =>
								setProjectsPage(pageType[data[0].type.toUpperCase() + "S"])
							}
						>
							See More
						</Style.SeeMore>
					</SwiperSlide>
				</Swiper>
			)}
		</Style.Slider>
	);
}

Slider.propTypes = {
	response: PropTypes.object.isRequired,

	page: PropTypes.shape({
		setProjectsPage: PropTypes.func.isRequired,
		pageType: PropTypes.object.isRequired,
	}),
};

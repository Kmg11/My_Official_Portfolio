import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y, Keyboard } from 'swiper/core';
import { Components } from '../../../../Style';
import { Card } from '../../Card/Card';
import 'swiper/swiper-bundle.min.css';
import * as Style from './Slider.style';

// install Swiper modules
SwiperCore.use([Navigation, A11y, Keyboard]);

const sliderVariants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Slider({ response, page }) {
  const { data, isPending } = response;
  const { setProjectsPage, pageType } = page;
  const topProjects = data && data.filter((project) => project.is_top);

  const slideList =
    data &&
    topProjects.map((item) => (
      <SwiperSlide key={item.id}>
        <Card data={item} />
      </SwiperSlide>
    ));

  return isPending ? (
    <Style.Slider>
      <Components.SubTitle>
        {isPending && <Components.SkeletonLoadingText head width="100px" />}
      </Components.SubTitle>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        slidesPerGroup={1}
        keyboard
        navigation
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          700: { slidesPerView: 2, spaceBetween: 10 },
          1100: { slidesPerView: 3, spaceBetween: 10 },
          1400: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {isPending &&
          [...new Array(4).keys()].map((item) => (
            <SwiperSlide key={item}>
              <Components.SkeletonLoadingBox height="190px" />
            </SwiperSlide>
          ))}
      </Swiper>
    </Style.Slider>
  ) : (
    data && (
      <Style.Slider variants={sliderVariants} initial="hidden" animate="visible" exit="hidden">
        <Components.SubTitle>{data && data[0].type}</Components.SubTitle>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          keyboard
          navigation
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 },
            700: { slidesPerView: 2, spaceBetween: 10 },
            1100: { slidesPerView: 3, spaceBetween: 10 },
            1400: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {slideList}

          <SwiperSlide>
            <Style.SeeMore
              onClick={() => setProjectsPage(pageType[`${data[0].type.toUpperCase()}S`])}
            >
              See More
            </Style.SeeMore>
          </SwiperSlide>
        </Swiper>
      </Style.Slider>
    )
  );
}

Slider.propTypes = {
  response: PropTypes.object.isRequired,

  page: PropTypes.shape({
    setProjectsPage: PropTypes.func.isRequired,
    pageType: PropTypes.object.isRequired,
  }).isRequired,
};

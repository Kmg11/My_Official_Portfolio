import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs } from 'swiper/core';
import { IMAGES } from '../../../../../constants';
import { CreateImage } from '../../../../../components';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import * as Style from './Slider.style';

// import Swiper core and required modules
import { Components } from '../../../../../styles';
import { useProject } from '../../ProjectContext';

// install Swiper modules
SwiperCore.use([Thumbs]);

const sliderVariants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export function Slider() {
  const { project, isPending } = useProject();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imagesList =
    project &&
    [...Array(project.images.number_of_images).keys()].map((item) => (
      <SwiperSlide key={item}>
        <CreateImage
          src={`${IMAGES.PROJECTS}/${project.images.folder_name}/${item + 1}`}
          alt={`${project.title} Image`}
        />
      </SwiperSlide>
    ));

  return (
    <Style.Slider variants={sliderVariants} initial="hidden" animate="visible" exit="hidden">
      <Components.SubTitle>Images</Components.SubTitle>

      {isPending && (
        <Style.SwiperContainer>
          <Components.SkeletonLoadingBox height="400px" />
        </Style.SwiperContainer>
      )}

      {project && (
        <Style.SwiperContainer>
          <Swiper spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} className="main-sider">
            {imagesList}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={16}
            slidesPerView={4}
            freeMode
            watchSlidesVisibility
            watchSlidesProgress
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
      )}
    </Style.Slider>
  );
}

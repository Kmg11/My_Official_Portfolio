import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Image } from './Image/Image';
import { Go } from './Go/Go';
import { Buttons } from './Buttons/Buttons';
import { Info } from './Info/Info';
import * as Style from './Card.style';
import { InfoProvider } from './InfoContext';

const cardVariants = {
  hidden: { opacity: 0, y: 40, transition: { duration: 0.5 } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0 } },
};

export function Card({ data }) {
  const { images } = data;
  const [imageNumber, setImageNumber] = useState(1);

  const timer = useRef(0);

  const handleOnMouseEnter = () => {
    setImageNumber((prev) => prev + 1);

    timer.current = setInterval(() => {
      setImageNumber((prev) => (prev >= images.number_of_images ? 1 : prev + 1));
    }, 1000);
  };

  const handleOnMouseLeave = () => {
    setImageNumber(1);
    clearInterval(timer.current);
  };

  useEffect(() => () => clearInterval(timer.current), []);

  return (
    <InfoProvider value={data}>
      <Style.Card
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <Image imageNumber={imageNumber} />
        <Go />
        <Buttons />
        <Info />
      </Style.Card>
    </InfoProvider>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

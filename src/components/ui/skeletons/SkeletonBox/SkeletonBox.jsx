import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './SkeletonBox.style';

export function SkeletonBox({ width, height, radius }) {
  return <Style.SkeletonBox width={width} height={height} radius={radius} />;
}

SkeletonBox.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
};

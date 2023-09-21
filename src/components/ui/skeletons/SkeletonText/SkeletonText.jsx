import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './SkeletonText.style';

export function SkeletonText({ head, width }) {
  return <Style.SkeletonText head={head} width={width} />;
}

SkeletonText.propTypes = {
  head: PropTypes.bool,
  width: PropTypes.string,
};

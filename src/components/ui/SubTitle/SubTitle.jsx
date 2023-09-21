import React from 'react';
import PropTypes from 'prop-types';
import * as Style from './SubTitle.style';

export function SubTitle({ children }) {
  return <Style.SubTitle>{children}</Style.SubTitle>;
}

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

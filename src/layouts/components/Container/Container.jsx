import React from 'react';
import PropTypes from 'prop-types';
import * as Styles from './Container.style';

export function Container({ children }) {
  return <Styles.Container>{children}</Styles.Container>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

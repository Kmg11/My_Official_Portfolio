import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from './Navbar/Navbar';
import * as Styles from './MainLayout.style';

export function MainLayout({ children }) {
  return (
    <Styles.MainLayout>
      <Navbar />

      <Styles.MainLayoutContent>{children}</Styles.MainLayoutContent>
    </Styles.MainLayout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

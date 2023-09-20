import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Style from './NavbarListItem.style';

const itemVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export function NavbarListItem({ icon, name, linkProps }) {
  return (
    <Style.Item variants={itemVariants}>
      <Style.Link {...linkProps}>
        <Style.Icon>
          <FontAwesomeIcon icon={icon} />
        </Style.Icon>
        <Style.Name>{name}</Style.Name>
      </Style.Link>
    </Style.Item>
  );
}

NavbarListItem.propTypes = {
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  linkProps: PropTypes.object.isRequired,
};

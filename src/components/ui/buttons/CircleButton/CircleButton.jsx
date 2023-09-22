import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Style from './CircleButton.style';

export function CircleButton({ children, isStatic = false, icon, to }) {
  const innerLink = { as: Link, to };
  const outerLink = { as: 'a', href: to, target: '_blank', rel: 'noreferrer' };

  return (
    <Style.CircleButton className="button" {...(isStatic ? innerLink : outerLink)}>
      <Style.ButtonIcon>
        <FontAwesomeIcon icon={icon} fixedWidth />
      </Style.ButtonIcon>

      <Style.ButtonName>{children}</Style.ButtonName>
    </Style.CircleButton>
  );
}

CircleButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  isStatic: PropTypes.bool,
};

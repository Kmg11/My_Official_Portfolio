import PropTypes from 'prop-types';
import React, { createContext, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Components } from '../../../styles';
import * as Style from './Circle.style';

const ButtonContext = createContext();

export function CircleButtons({ children, isStatic, isPending, object, section }) {
  const contextValue = useMemo(() => ({ isStatic, object, section }), []);

  return (
    <Style.Buttons className="circle-buttons">
      {isStatic || (!isPending && object && object[section]) ? (
        <ButtonContext.Provider value={contextValue}>{children}</ButtonContext.Provider>
      ) : (
        isPending &&
        [...new Array(2).keys()].map((item) => (
          <Style.Button as="div" key={item}>
            <Components.SkeletonLoadingBox width="40px" height="40px" radius="50%" />
            <Components.SkeletonLoadingText width="60px" />
          </Style.Button>
        ))
      )}
    </Style.Buttons>
  );
}

CircleButtons.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element.isRequired),
    PropTypes.element.isRequired,
  ]).isRequired,
  isStatic: PropTypes.bool.isRequired,
  // eslint-disable-next-line consistent-return, react/require-default-props
  isPending(props, propName) {
    if (!props.isStatic && props[propName] === undefined) {
      return new Error(
        `${propName} prop not exist if the data is dynamic you must add ${propName} prop`,
      );
    }
  },
  // eslint-disable-next-line react/require-default-props
  object: PropTypes.object,
  // eslint-disable-next-line consistent-return, react/require-default-props
  section(props, propName) {
    if (!props.isStatic && props[propName] === undefined) {
      return new Error(
        `${propName} prop not exist if the data is dynamic you must add ${propName} prop`,
      );
    }
  },
};

export function Button({ children, name, icon }) {
  const { object, section, isStatic } = useContext(ButtonContext);
  const innerLink = { as: Link, to: name };
  const outerLink = { as: 'a', href: object[section][name], target: '_blank', rel: 'noreferrer' };

  return (
    <Style.Button
      className="button"
      {...(isStatic ? innerLink : object[section][name] ? outerLink : {})}
    >
      <Style.ButtonIcon>
        <FontAwesomeIcon icon={icon} fixedWidth />
      </Style.ButtonIcon>
      <Style.ButtonName>{children}</Style.ButtonName>
    </Style.Button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

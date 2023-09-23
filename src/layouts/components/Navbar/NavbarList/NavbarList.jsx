import PropTypes from 'prop-types';
import { faWrench, faUserAlt, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../../../constants';
import * as Style from './NavbarList.style';
import { NavbarListItem } from './NavbarListItem/NavbarListItem';

const linksList = [
  { name: 'home', to: ROUTES.HOME, icon: faHome },
  { name: 'projects', to: ROUTES.PROJECTS, icon: faWrench },
  { name: 'profile', to: ROUTES.PROFILE, icon: faUserAlt },
];

export function NavbarList({ isNavbarOpen, closeNavbar }) {
  return (
    <Style.NavbarList isNavbarOpen={isNavbarOpen}>
      {linksList.map(({ name, to, icon }) => (
        <NavbarListItem
          key={name}
          name={name}
          icon={icon}
          linkProps={{
            as: NavLink,
            to,
            exact: true,
            onClick: closeNavbar,
          }}
        />
      ))}

      {isNavbarOpen && (
        <NavbarListItem
          name="close"
          icon={faTimes}
          linkProps={{ as: 'button', onClick: closeNavbar }}
        />
      )}
    </Style.NavbarList>
  );
}

NavbarList.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  closeNavbar: PropTypes.func.isRequired,
};

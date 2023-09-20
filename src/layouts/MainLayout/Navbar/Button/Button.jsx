import PropTypes from 'prop-types';
import * as Style from './Button.style';

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export function Button({ isNavbarOpen, toggleNavbar }) {
  return (
    <Style.Button
      onClick={toggleNavbar}
      variants={buttonVariants}
      aria-label="Toggle Navbar"
    >
      <Style.Line isNavbarOpen={isNavbarOpen} />
      <Style.Line isNavbarOpen={isNavbarOpen} />
      <Style.Line isNavbarOpen={isNavbarOpen} />
    </Style.Button>
  );
}

Button.propTypes = {
  isNavbarOpen: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};

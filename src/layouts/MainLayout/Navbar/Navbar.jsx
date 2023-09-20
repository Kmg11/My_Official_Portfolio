import { useRef, useState } from 'react';
import { Image } from './Image/Image';
import { Button } from './Button/Button';
import { NavbarList } from './NavbarList/NavbarList';
import { Functions } from '../../../Style';
import { useOutsideClick, useEscapeKey, useScroll, useResize } from '../../../hooks';
import * as Style from './Navbar.style';

export function Navbar() {
  const navbar = useRef(0);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const closeNavbar = () => setIsNavbarOpen(false);
  const toggleNavbar = () => setIsNavbarOpen((prev) => !prev);

  useOutsideClick(navbar, closeNavbar);
  useEscapeKey(closeNavbar);
  useScroll(closeNavbar);
  useResize(closeNavbar);

  const navbarVariants = {
    hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7 },
    },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  const smallNavbarVariants = {
    hidden: { opacity: 0, y: -100, transition: { duration: 0.5 } },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7 },
    },
    exit: { opacity: 0, y: -100, transition: { duration: 0.5, delay: 0 } },
  };

  const isSmall = window.matchMedia(
    Functions.mediaBreakpointDown('sm').replace('@media ', ''),
  ).matches;

  return (
    <Style.Navbar
      ref={navbar}
      variants={!isSmall ? navbarVariants : smallNavbarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Button isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
      <Image />
      <NavbarList isNavbarOpen={isNavbarOpen} closeNavbar={closeNavbar} />
    </Style.Navbar>
  );
}

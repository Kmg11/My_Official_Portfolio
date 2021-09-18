import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { NavbarActionCreators } from "../../State/ActionCreators";
import { Image } from "./Image/Image";
import { Button } from "./Button/Button";
import { List } from "./List/List";
import { Functions } from "../../Style";
import * as Style from "./Navbar.style";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [list, setList] = useState(0);
	const [listWidth, setListWidth] = useState(0);

	const navbar = useRef(0);
	const dispatch = useDispatch();
	const { setNavbarSize } = bindActionCreators(NavbarActionCreators, dispatch);

	// Set the size of the navbar
	useEffect(() => {
		const handleNavbarSize = () => {
			setNavbarSize({
				width: getComputedStyle(navbar.current).width,
				height: getComputedStyle(navbar.current).height,
			});
		};

		handleNavbarSize();
		window.addEventListener("resize", handleNavbarSize);
		return () => window.removeEventListener("resize", handleNavbarSize);
	}, [setNavbarSize]);

	// Close Navbar When CLick Outside & Press ESC Key
	useEffect(() => {
		const closeNavbar = (e) => {
			if (e.key === "Escape" && e.code === "Escape") setIsOpen(false);
			if (e.target !== list.current && e.target !== navbar.current) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("click", closeNavbar);
			window.addEventListener("keyup", closeNavbar);
		}

		return () => {
			document.removeEventListener("click", closeNavbar);
			window.removeEventListener("keyup", closeNavbar);
		};
	}, [isOpen, list]);

	// Handle Close Navbar When Resize & Scroll Window
	useEffect(() => {
		const closeNavbar = () => setIsOpen(false);

		if (isOpen) {
			window.addEventListener("scroll", closeNavbar);
			window.addEventListener("resize", closeNavbar);
		}

		return () => {
			window.removeEventListener("resize", closeNavbar);
			window.removeEventListener("scroll", closeNavbar);
		};
	}, [isOpen]);

	const navbarVariants = {
		hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },
		visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
		exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
	};

	const smallNavbarVariants = {
		hidden: { opacity: 0, y: -100, transition: { duration: 0.5 } },
		visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.7 } },
		exit: {
			opacity: 0,
			y: -100,
			transition: { duration: 0.5, delay: isOpen ? 0.4 : 0 },
		},
	};

	const isSmall = window.matchMedia(
		Functions.mediaBreakpointDown("sm").replace("@media ", "")
	).matches;

	const getNavbar = (variants) => {
		return (
			<Style.Navbar
				ref={navbar}
				isOpen={isOpen}
				listWidth={listWidth}
				variants={variants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<Button isOpen={isOpen} setIsOpen={setIsOpen} />
				<Image />
				<List setListWidth={setListWidth} setList={setList} isOpen={isOpen} />
			</Style.Navbar>
		);
	};

	return !isSmall ? getNavbar(navbarVariants) : getNavbar(smallNavbarVariants);
}

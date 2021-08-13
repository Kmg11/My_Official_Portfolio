import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { NavbarActionCreators } from "../../State/ActionCreators";
import { Image } from "./Image/Image";
import { Button } from "./Button/Button";
import { List } from "./List/List";
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
			if (isOpen) {
				if (e.target !== list.current && e.target !== navbar.current) {
					setIsOpen(false);
				}
				if (e.key === "Escape" && e.code === "Escape") setIsOpen(false);
			}
		};

		document.addEventListener("click", closeNavbar);
		window.addEventListener("keyup", closeNavbar);

		return () => {
			document.removeEventListener("click", closeNavbar);
			window.removeEventListener("keyup", closeNavbar);
		};
	}, [isOpen, list]);

	// Handle Close Navbar When Resize & Scroll Window
	useEffect(() => {
		const closeNavbar = () => {
			if (isOpen) setIsOpen(false);
		};

		window.addEventListener("scroll", closeNavbar);
		window.addEventListener("resize", closeNavbar);

		return () => {
			window.removeEventListener("resize", closeNavbar);
			window.removeEventListener("scroll", closeNavbar);
		};
	}, [isOpen]);

	return (
		<Style.Navbar ref={navbar} isOpen={isOpen} listWidth={listWidth}>
			<Button isOpen={isOpen} setIsOpen={setIsOpen} />
			<Image />
			<List setListWidth={setListWidth} setList={setList} isOpen={isOpen} />
		</Style.Navbar>
	);
}

import { useRef, useState } from "react";
import { Image } from "./Image/Image";
import { Button } from "./Button/Button";
import { List } from "./List/List";
import { Functions } from "../../Style";
import {
	useOutsideClick,
	useEscapeKey,
	useScroll,
	useResize,
} from "../../Hooks";
import * as Style from "./Navbar.style";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navbar = useRef(0);

	useOutsideClick(navbar, () => setIsOpen(false));
	useEscapeKey(() => setIsOpen(false));
	useScroll(() => setIsOpen(false));
	useResize(() => setIsOpen(false));

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

	return (
		<Style.Navbar
			ref={navbar}
			isOpen={isOpen}
			variants={!isSmall ? navbarVariants : smallNavbarVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Button isOpen={isOpen} setIsOpen={setIsOpen} />
			<Image />
			<List isOpen={isOpen} />
		</Style.Navbar>
	);
}

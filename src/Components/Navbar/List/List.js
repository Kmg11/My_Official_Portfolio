import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Routes } from "../../../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Style from "./List.style";
import {
	faWrench,
	faUserAlt,
	faScroll,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

const itemVariants = {
	hidden: { opacity: 0, scale: 0.7 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export function List({ setListWidth, setList, isOpen }) {
	const list = useRef(0);

	// Set the width of the list
	useEffect(() => {
		setList(list);

		const handlListWidth = () => {
			setListWidth(getComputedStyle(list.current).width);
		};

		handlListWidth();
		window.addEventListener("resize", handlListWidth);
		return () => window.removeEventListener("resize", handlListWidth);
	}, [setListWidth, setList]);

	const linksList = [
		{ name: "home", to: Routes.HOME, icon: faHome },
		{ name: "projects", to: Routes.PROJECTS, icon: faWrench },
		{ name: "profile", to: Routes.PROFILE, icon: faUserAlt },
	];

	const linksItems = linksList.map(({ name, to, icon }, index) => {
		return (
			<Style.Item key={name} variants={itemVariants}>
				<Style.Link exact to={to}>
					<Style.Icon>
						<FontAwesomeIcon icon={icon} />
					</Style.Icon>
					<Style.Name>{name}</Style.Name>
				</Style.Link>
			</Style.Item>
		);
	});

	return (
		<Style.List
			isOpen={isOpen}
			ref={list}
			onclick={(e) => {
				e.stopPropagation();
			}}
		>
			{linksItems}

			{/* <Style.Item variants={itemVariants}>
				<Style.Link
					as="a"
					href={`${process.env.PUBLIC_URL}/Files/Kirolos_Mahfouz_Cv.docx`}
					download="Kirolos Mahfouz Cv"
				>
					<Style.Icon>
						<FontAwesomeIcon icon={faScroll} />
					</Style.Icon>
					<Style.Name>cv</Style.Name>
				</Style.Link>
			</Style.Item> */}
		</Style.List>
	);
}

List.propTypes = {
	setListWidth: PropTypes.func.isRequired,
	setList: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

import PropTypes from "prop-types";
import { Routes } from "../../../Constants";
import * as Style from "./NavbarList.style";
import {
	faWrench,
	faUserAlt,
	faHome,
	faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavbarListItem } from "./NavbarListItem/NavbarListItem";
import { NavLink } from "react-router-dom";

const linksList = [
	{ name: "home", to: Routes.HOME, icon: faHome },
	{ name: "projects", to: Routes.PROJECTS, icon: faWrench },
	{ name: "profile", to: Routes.PROFILE, icon: faUserAlt },
];

export function NavbarList({ isNavbarOpen, closeNavbar }) {
	return (
		<Style.NavbarList isNavbarOpen={isNavbarOpen}>
			{linksList.map(({ name, to, icon }) => {
				return (
					<NavbarListItem
						key={name}
						name={name}
						icon={icon}
						linkProps={{
							as: NavLink,
							to: to,
							exact: true,
							onClick: closeNavbar,
						}}
					/>
				);
			})}

			{/* <NavbarListItem
				name="cv"
				icon={faScroll}
				linkProps={{
					as: "a",
					href: `${process.env.PUBLIC_URL}/Files/Kirolos_Mahfouz_Cv.docx`,
					download: "Kirolos Mahfouz Cv",
				}}
			/> */}

			{isNavbarOpen && (
				<NavbarListItem
					name="close"
					icon={faTimes}
					linkProps={{ as: "button", onClick: closeNavbar }}
				/>
			)}
		</Style.NavbarList>
	);
}

NavbarList.propTypes = {
	isNavbarOpen: PropTypes.bool.isRequired,
	closeNavbar: PropTypes.func.isRequired,
};

import { Link } from "react-router-dom";
import { Images, Routes } from "../../Constants";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { NavbarActionCreators } from "../../State/ActionCreators";
import * as Style from "./Navbar.style";
import {
	faWrench,
	faUserAlt,
	faScroll,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
	const navWidth = useRef();
	const dispatch = useDispatch();
	const { setNavbarWidth } = bindActionCreators(NavbarActionCreators, dispatch);

	useEffect(() => {
		const handleNavWidth = () => setNavbarWidth(navWidth.current.offsetWidth);

		handleNavWidth();
		window.addEventListener("resize", handleNavWidth);

		return () => window.removeEventListener("resize", handleNavWidth);
	}, [setNavbarWidth]);

	return (
		<Style.Navbar ref={navWidth}>
			<Style.ImageContainer>
				<Link to={Routes.PROFILE}>
					<Style.Image
						src={`${Images.GLOBAL}/personal-image-small.webp`}
						alt="Kirolos Mahfouz"
					/>
				</Link>
			</Style.ImageContainer>

			<Style.List>
				<Style.Item>
					<Style.ItemLink exact to={Routes.HOME}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faHome} />
						</Style.LinkIcon>
						<Style.LinkName>Home</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>

				<Style.Item>
					<Style.ItemLink to={Routes.PROJECTS}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faWrench} />
						</Style.LinkIcon>
						<Style.LinkName>Projects</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>

				<Style.Item>
					<Style.ItemLink to={Routes.PROFILE}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faUserAlt} />
						</Style.LinkIcon>
						<Style.LinkName>Profile</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>

				<Style.Item>
					<Style.ItemLink to={Routes.CV}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faScroll} />
						</Style.LinkIcon>
						<Style.LinkName>Cv</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>
			</Style.List>
		</Style.Navbar>
	);
}

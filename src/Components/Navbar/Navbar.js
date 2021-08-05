import { Link } from "react-router-dom";
import { Images, Routes } from "../../Constants";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWrench,
	faUserAlt,
	faScroll,
	faHome,
} from "@fortawesome/free-solid-svg-icons";
import * as Style from "./Navbar.style";

function MainNavbar(props, ref) {
	return (
		<Style.Navbar ref={ref}>
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

export const Navbar = forwardRef(MainNavbar);

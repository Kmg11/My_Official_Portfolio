import * as Style from "./Navbar.style";
import { Link } from "react-router-dom";
import { CV, HOME, PROFILE, PROJECTS } from "../../Constants/Router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faWrench,
	faUserAlt,
	faScroll,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
	return (
		<Style.Navbar>
			<Style.ImageContainer>
				<Link to={PROFILE}>
					<Style.Image
						src="/images/global/personal-image-small.webp"
						alt="Kirolos Mahfouz"
					/>
				</Link>
			</Style.ImageContainer>

			<Style.List>
				<Style.Item>
					<Style.ItemLink exact to={HOME}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faHome} />
						</Style.LinkIcon>
						<Style.LinkName>Home</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>

				<Style.Item>
					<Style.ItemLink to={PROJECTS}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faWrench} />
						</Style.LinkIcon>
						<Style.LinkName>Projects</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>

				<Style.Item>
					<Style.ItemLink to={PROFILE}>
						<Style.LinkIcon>
							<FontAwesomeIcon icon={faUserAlt} />
						</Style.LinkIcon>
						<Style.LinkName>Profile</Style.LinkName>
					</Style.ItemLink>
				</Style.Item>

				<Style.Item>
					<Style.ItemLink to={CV}>
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

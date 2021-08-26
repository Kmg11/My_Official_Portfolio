import { useContext } from "react";
import { useSelector } from "react-redux";
import { CreateImage } from "../../CreateImage/CreateImage";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { Images } from "../../../Constants";
import { Components } from "../../../Style";
import { CircleButtons } from "../../Buttons/CircleButtons/CircleButtons";
import { ProjectContext } from "../SingleProject";
import * as Style from "./Header.style";

export function Header() {
	const {
		project: { type, title, description, links, images },
	} = useContext(ProjectContext);

	const linksList = [
		{ href: links.github, icon: faGithub, text: "github" },
		{ href: links.live, icon: faWifi, text: "live" },
	];

	const finalLinks = links.live ? linksList : linksList.slice(0, 1);
	const navbarHeight = useSelector((state) => state.navbarSize.height);

	return (
		<Style.Header navbarHeight={navbarHeight}>
			<Style.CoverImage>
				<CreateImage
					src={`${Images.PROJECTS}/${images.folder_name}/1`}
					alt={`${title} Cover Image`}
				/>
			</Style.CoverImage>

			<Components.Container>
				<Style.Content>
					<Style.Badge>{type}</Style.Badge>
					<Style.Name>{title}</Style.Name>
					<Style.Description>{description}</Style.Description>
					<CircleButtons info={finalLinks} />
				</Style.Content>
			</Components.Container>
		</Style.Header>
	);
}

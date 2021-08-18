import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Images } from "../../../Constants";
import { Components } from "../../../Style";
import { CircleButtons } from "../../Buttons/CircleButtons/CircleButtons";
import { ProjectContext } from "../SingleProject";
import * as Style from "./Header.style";

export function Header() {
	const {
		project: { title, description, links, images },
	} = useContext(ProjectContext);

	return (
		<Style.Header>
			<Style.CoverImage
				src={`${Images.PROJECTS}/${images.folder_name}/1.webp`}
				alt={`${title} Cover Image`}
			/>

			<Components.Container>
				<Style.Content>
					<Style.Name>{title}</Style.Name>

					<Style.Description>{description}</Style.Description>

					<CircleButtons
						info={[
							{ href: links.github, icon: faGithub, text: "github" },
							{ href: links.live, icon: faWifi, text: "live" },
						]}
					/>
				</Style.Content>
			</Components.Container>
		</Style.Header>
	);
}

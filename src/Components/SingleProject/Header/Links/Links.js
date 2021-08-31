import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CircleButtons } from "../../../Buttons/CircleButtons/CircleButtons";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Links.style";

export function Links() {
	const { project, isPending } = useContext(ProjectContext);

	const linksList = project && [
		{ href: project.links.github, icon: faGithub, text: "github" },
		{ href: project.links.live, icon: faWifi, text: "live" },
	];

	return (
		<Style.Links>
			{isPending && <CircleButtons skeleton={true} />}

			{linksList && (
				<CircleButtons
					info={project.links.live ? linksList : linksList.slice(0, 1)}
				/>
			)}
		</Style.Links>
	);
}

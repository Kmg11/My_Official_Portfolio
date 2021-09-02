import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProjectContext } from "../../SingleProject";
import {
	CircleButtons,
	CircleButton,
} from "../../../Buttons/CircleButtons/CircleButtons";
import * as Style from "./Links.style";

export function Links() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Links>
			<CircleButtons isPending={isPending} object={project} section="links">
				<CircleButton name="github" icon={faGithub} text="github" />
				<CircleButton name="live" icon={faWifi} text="live" />
			</CircleButtons>
		</Style.Links>
	);
}

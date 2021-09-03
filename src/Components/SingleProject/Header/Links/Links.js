import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ProjectContext } from "../../SingleProject";
import {
	CircleButtons,
	Button,
} from "../../../Buttons/CircleButtons/CircleButtons";
import * as Style from "./Links.style";

export function Links() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Links>
			<CircleButtons
				isPending={isPending}
				object={project}
				section="links"
				isStatic={false}
			>
				<Button name="github" icon={faGithub}>
					github
				</Button>
				<Button name="live" icon={faWifi}>
					live
				</Button>
			</CircleButtons>
		</Style.Links>
	);
}

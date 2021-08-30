import { useContext } from "react";
import { ProjectContext } from "../../../SingleProject";
import { Section } from "../../Section/Section";
import {
	faCodeBranch,
	faLink,
	faPercent,
	faTools,
} from "@fortawesome/free-solid-svg-icons";
import * as Style from "./Right.style";

export function Right() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Right>
			<Section
				title="technologies"
				icon={faTools}
				isPending={isPending}
				data={project}
				section="technologies"
			/>

			<Section
				title="tests"
				icon={faPercent}
				isPending={isPending}
				data={project}
				section="tests"
			/>

			<Section
				title="versions"
				icon={faCodeBranch}
				isPending={isPending}
				data={project}
				section={"versions"}
				isLink={true}
			/>

			<Section
				title="other links"
				icon={faLink}
				isPending={isPending}
				data={project}
				section="other_links"
				isLink={true}
			/>
		</Style.Right>
	);
}

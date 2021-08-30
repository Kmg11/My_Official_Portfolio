import { useContext } from "react";
import { ProjectContext } from "../../SingleProject";
import { Section } from "../Section/Section";
import {
	faClipboard,
	faCodeBranch,
	faLink,
	faPercent,
	faStar,
	faTools,
} from "@fortawesome/free-solid-svg-icons";

export function SmallScreens() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<>
			<Section
				title="technologies"
				icon={faTools}
				isPending={isPending}
				data={project}
				section="technologies"
			/>

			<Section
				title="features"
				icon={faStar}
				data={project}
				section="features"
				isPending={isPending}
			/>

			<Section
				title="notes"
				icon={faClipboard}
				data={project}
				section="notes"
				isPending={isPending}
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

			<Section
				title="how to use"
				icon={faClipboard}
				data={project}
				section="how_to_use"
				isPending={isPending}
			/>
		</>
	);
}

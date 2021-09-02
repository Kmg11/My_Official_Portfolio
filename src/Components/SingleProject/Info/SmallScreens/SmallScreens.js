import { useContext } from "react";
import { ProjectContext } from "../../SingleProject";
import { Box } from "../../../Box/Box";
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
			<Box
				title="technologies"
				icon={faTools}
				isPending={isPending}
				data={project}
				section="technologies"
			/>

			<Box
				title="features"
				icon={faStar}
				data={project}
				section="features"
				isPending={isPending}
			/>

			<Box
				title="notes"
				icon={faClipboard}
				data={project}
				section="notes"
				isPending={isPending}
			/>

			<Box
				title="tests"
				icon={faPercent}
				isPending={isPending}
				data={project}
				section="tests"
			/>

			<Box
				title="versions"
				icon={faCodeBranch}
				isPending={isPending}
				data={project}
				section={"versions"}
				isLink={true}
			/>

			<Box
				title="other links"
				icon={faLink}
				isPending={isPending}
				data={project}
				section="other_links"
				isLink={true}
			/>

			<Box
				title="how to use"
				icon={faClipboard}
				data={project}
				section="how_to_use"
				isPending={isPending}
			/>
		</>
	);
}

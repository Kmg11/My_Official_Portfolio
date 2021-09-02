import { useContext } from "react";
import { ProjectContext } from "../../../SingleProject";
import { Box } from "../../../../Box/Box";
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
			<Box
				title="technologies"
				icon={faTools}
				isPending={isPending}
				data={project}
				section="technologies"
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
		</Style.Right>
	);
}

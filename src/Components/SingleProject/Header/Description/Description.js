import { useContext } from "react";
import { Components } from "../../../../Style";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Description.style";

export function Description() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Description>
			{isPending && (
				<>
					<Components.SkeletonLoadingText />
					<Components.SkeletonLoadingText />
					<Components.SkeletonLoadingText />
				</>
			)}

			{project && project.description}
		</Style.Description>
	);
}

import { useContext } from "react";
import { Components } from "../../../../Style";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Name.style";

export function Name() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Name>
			{isPending && (
				<Components.SkeletonLoadingText head={true} width="200px" />
			)}

			{project && project.title}
		</Style.Name>
	);
}

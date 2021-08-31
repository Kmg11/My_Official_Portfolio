import { useContext } from "react";
import { Components } from "../../../../Style";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Badge.style";

export function Badge() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Badge>
			{isPending && (
				<Components.SkeletonLoadingBox width="120px" height="20px" />
			)}

			{project && <Style.InnerBadge>{project.type}</Style.InnerBadge>}
		</Style.Badge>
	);
}

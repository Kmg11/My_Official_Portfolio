import { useContext } from "react";
import { Components } from "../../../../Style";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Badge.style";

const badgeVariants = {
	hidden: { opacity: 0, y: 20, scale: 1.1, originX: 0 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export function Badge() {
	const { project, isPending } = useContext(ProjectContext);

	return isPending ? (
		<Components.SkeletonLoadingBox width="120px" height="20px" />
	) : (
		project && (
			<Style.Badge variants={badgeVariants}>{project.type}</Style.Badge>
		)
	);
}

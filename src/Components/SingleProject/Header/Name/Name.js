import { useContext } from "react";
import { Components } from "../../../../Style";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Name.style";

const nameVariants = {
	hidden: { opacity: 0, y: 20, scale: 1.1, originX: 0 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.5, delay: 0.3 },
	},
};

export function Name() {
	const { project, isPending } = useContext(ProjectContext);

	return isPending ? (
		<Style.Name>
			<Components.SkeletonLoadingText head={true} width="200px" />
		</Style.Name>
	) : (
		project && <Style.Name variants={nameVariants}>{project.title}</Style.Name>
	);
}

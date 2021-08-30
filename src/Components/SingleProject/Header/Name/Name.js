import { Components } from "../../../../Style";
import * as Style from "./Name.style";

export function Name({ project, isPending }) {
	return (
		<Style.Name>
			{isPending && (
				<Components.SkeletonLoadingText head={true} width="200px" />
			)}

			{project && project.title}
		</Style.Name>
	);
}

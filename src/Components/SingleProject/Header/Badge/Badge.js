import { Components } from "../../../../Style";
import * as Style from "./Badge.style";

export function Badge({ project, isPending }) {
	return (
		<Style.Badge>
			{isPending && (
				<Components.SkeletonLoadingBox width="120px" height="20px" />
			)}

			{project && <Style.InnerBadge>{project.type}</Style.InnerBadge>}
		</Style.Badge>
	);
}

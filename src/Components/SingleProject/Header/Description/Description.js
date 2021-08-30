import { Components } from "../../../../Style";
import * as Style from "./Description.style";

export function Description({ project, isPending }) {
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

import { Components } from "../../../Style";
import * as Style from "./Description.style";

export function Description({ data, isPending }) {
	return (
		<Style.Description>
			{isPending && (
				<>
					<Components.SkeletonLoadingText />
					<Components.SkeletonLoadingText />
				</>
			)}

			{data && data.description}
		</Style.Description>
	);
}

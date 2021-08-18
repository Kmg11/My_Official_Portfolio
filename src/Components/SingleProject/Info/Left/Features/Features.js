import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";
import * as Style from "./Features.style";

export function Features() {
	const {
		project: { features },
	} = useContext(ProjectContext);

	return (
		<Style.Features>
			<Box title="features" icon={faStar} items={features} />
		</Style.Features>
	);
}

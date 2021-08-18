import { faTools } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";
import * as Style from "./Technologies.style";

export function Technologies() {
	const {
		project: { technologies },
	} = useContext(ProjectContext);

	return (
		<Style.Technologies>
			<Box title="technologies" icon={faTools} items={technologies} />
		</Style.Technologies>
	);
}

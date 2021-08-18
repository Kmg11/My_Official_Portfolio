import { faPercent } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";
import * as Style from "./Tests.style";

export function Tests() {
	const {
		project: { tests },
	} = useContext(ProjectContext);

	return (
		<Style.Tests>
			<Box title="tests" icon={faPercent} items={tests} />
		</Style.Tests>
	);
}

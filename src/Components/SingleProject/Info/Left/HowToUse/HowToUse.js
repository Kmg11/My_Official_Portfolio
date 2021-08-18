import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";

import * as Style from "./HowToUse.style";

export function HowToUse() {
	const {
		project: { how_to_use },
	} = useContext(ProjectContext);

	return (
		<Style.HowToUse>
			<Box title="how to use" icon={faClipboard} items={how_to_use} />
		</Style.HowToUse>
	);
}

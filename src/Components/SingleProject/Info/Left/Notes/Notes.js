import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";
import * as Style from "./Notes.style";

export function Notes() {
	const {
		project: { notes },
	} = useContext(ProjectContext);

	return (
		<Style.Notes>
			<Box title="notes" icon={faClipboard} items={notes} />
		</Style.Notes>
	);
}

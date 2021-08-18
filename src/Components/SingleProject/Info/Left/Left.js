import { Features } from "./Features/Features";
import { Notes } from "./Notes/Notes";
import { HowToUse } from "./HowToUse/HowToUse";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Left.style";
import { useContext } from "react";

export function Left() {
	const {
		project: { features, notes, how_to_use },
	} = useContext(ProjectContext);

	return (
		<Style.Left>
			{features && <Features />}
			{notes && <Notes />}
			{how_to_use && <HowToUse />}
		</Style.Left>
	);
}

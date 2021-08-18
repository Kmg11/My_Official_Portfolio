import { useContext } from "react";
import { Technologies } from "./Technologies/Technologies";
import { Tests } from "./Tests/Tests";
import { Versions } from "./Versions/Versions";
import { OtherLinks } from "./OtherLinks/OtherLinks";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./Right.style";

export function Right() {
	const {
		project: { technologies, tests, versions, other_links },
	} = useContext(ProjectContext);

	return (
		<Style.Right>
			{technologies && <Technologies />}
			{tests && <Tests />}
			{versions && <Versions />}
			{other_links && <OtherLinks />}
		</Style.Right>
	);
}

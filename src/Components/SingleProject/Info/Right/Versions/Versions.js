import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Box } from "../../../../Box/Box";
import { ProjectContext } from "../../../SingleProject";
import * as Style from "./Versions.style";

export function Versions() {
	const {
		project: { versions },
	} = useContext(ProjectContext);

	const versionsList = versions.map((version) => {
		return (
			<Style.Link
				key={version}
				href={version.github}
				target="_blank"
				rel="noreferrer"
			>
				{version.name}
			</Style.Link>
		);
	});

	return (
		<Style.Versions>
			<Box title="versions" icon={faCodeBranch} items={versionsList} />
		</Style.Versions>
	);
}

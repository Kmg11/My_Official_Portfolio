import { ProjectContext } from "../../../SingleProject";
import { useContext } from "react";
import { faClipboard, faStar } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../../Section/Section";
import * as Style from "./Left.style";

export function Left() {
	const { project, isPending } = useContext(ProjectContext);

	return (
		<Style.Left>
			<Section
				title="features"
				icon={faStar}
				data={project}
				section="features"
				isPending={isPending}
			/>

			<Section
				title="notes"
				icon={faClipboard}
				data={project}
				section="notes"
				isPending={isPending}
			/>

			<Section
				title="how to use"
				icon={faClipboard}
				data={project}
				section="how_to_use"
				isPending={isPending}
			/>
		</Style.Left>
	);
}

import { useContext } from "react";
import { Images } from "../../../../Constants";
import { CreateImage } from "../../../CreateImage/CreateImage";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./CoverImage.style";

export function CoverImage() {
	const { project } = useContext(ProjectContext);

	return (
		<Style.CoverImage>
			{project && (
				<CreateImage
					src={`${Images.PROJECTS}/${project.images.folder_name}/1`}
					alt={`${project.title} Cover Image`}
				/>
			)}
		</Style.CoverImage>
	);
}

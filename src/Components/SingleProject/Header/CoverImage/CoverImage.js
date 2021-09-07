import { useContext } from "react";
import { Images } from "../../../../Constants";
import { CreateImage } from "../../../CreateImage/CreateImage";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./CoverImage.style";

const nameVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { duration: 0.7 },
	},
};

export function CoverImage() {
	const { project } = useContext(ProjectContext);

	return (
		<Style.CoverImage variants={nameVariants}>
			{project && (
				<CreateImage
					src={`${Images.PROJECTS}/${project.images.folder_name}/1`}
					alt={`${project.title} Cover Image`}
				/>
			)}
		</Style.CoverImage>
	);
}

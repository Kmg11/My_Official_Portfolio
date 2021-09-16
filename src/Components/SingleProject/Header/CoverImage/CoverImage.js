import { useContext } from "react";
import { Images } from "../../../../Constants";
import { CreateImage } from "../../../CreateImage/CreateImage";
import { ProjectContext } from "../../SingleProject";
import * as Style from "./CoverImage.style";

const imageVariants = {
	hidden: { opacity: 0, transition: { duration: 0.5 } },
	visible: {
		opacity: 1,
		transition: { duration: 0.7 },
	},
};

export function CoverImage() {
	const { project } = useContext(ProjectContext);

	return (
		<Style.CoverImage variants={imageVariants}>
			{project && (
				<CreateImage
					src={`${Images.PROJECTS}/${project.images.folder_name}/1`}
					alt={`${project.title} Cover Image`}
				/>
			)}
		</Style.CoverImage>
	);
}

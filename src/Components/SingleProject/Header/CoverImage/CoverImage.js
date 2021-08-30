import { Images } from "../../../../Constants";
import { CreateImage } from "../../../CreateImage/CreateImage";
import * as Style from "./CoverImage.style";

export function CoverImage({ project }) {
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

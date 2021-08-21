import { useContext } from "react";
import { Images } from "../../../../Constants";
import { InfoContext } from "../Card";
import { CreateImage } from "../../../CreateImage/CreateImage";
import * as Style from "./Image.style";

export function Image({ imageNumber }) {
	const { title, images } = useContext(InfoContext);

	return (
		<Style.ImageContainer>
			<CreateImage
				src={`${Images.PROJECTS}/${images.folder_name}/${imageNumber}`}
				alt={title}
			/>
		</Style.ImageContainer>
	);
}

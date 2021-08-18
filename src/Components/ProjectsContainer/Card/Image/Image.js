import { useContext } from "react";
import { Images } from "../../../../Constants";
import { InfoContext } from '../Card'
import * as Style from "./Image.style";

export function Image() {
	const { title, images } = useContext(InfoContext);

	return (
		<Style.ImageContainer>
			<Style.Image
				src={`${Images.PROJECTS}/${images.folder_name}/1.webp`}
				alt={title}
			/>
		</Style.ImageContainer>
	);
}

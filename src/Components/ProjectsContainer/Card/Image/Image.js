import { Images } from "../../../../Constants";
import * as Style from "./Image.style";

export function Image() {
	return (
		<Style.ImageContainer>
			<Style.Image
				src={`${Images.TEMPLATES}/Apple.png`}
				alt="Project Name Image"
			/>
		</Style.ImageContainer>
	);
}

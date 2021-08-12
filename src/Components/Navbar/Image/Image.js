import { Link } from "react-router-dom";
import { Images, Routes } from "../../../Constants";
import * as Style from "./Image.style";

export function Image() {
	return (
		<Style.ImageContainer>
			<Link to={Routes.PROFILE}>
				<Style.Image
					src={`${Images.GLOBAL}/personal-image-small.webp`}
					alt="Kirolos Mahfouz"
				/>
			</Link>
		</Style.ImageContainer>
	);
}

import { Link } from "react-router-dom";
import { Images, Routes } from "../../../Constants";
import { CreateImage } from "../../CreateImage/CreateImage";
import * as Style from "./Image.style";

export function Image() {
	return (
		<Style.ImageContainer>
			<Link to={Routes.PROFILE}>
				<CreateImage
					src={`${Images.GLOBAL}/personal-image-small`}
					alt="Kirolos Mahfouz"
				/>
			</Link>
		</Style.ImageContainer>
	);
}

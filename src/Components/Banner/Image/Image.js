import { Images } from "../../../Constants";
import { Components } from "../../../Style";
import { CreateImage } from "../../CreateImage/CreateImage";
import * as Style from "./Image.style";

export function Image({ data, isPending }) {
	return (
		<Style.ImageContainer>
			{isPending && <Components.SkeletonLoadingBox />}

			{data && (
				<CreateImage src={`${Images.GLOBAL}/personal-image`} alt={data.name} />
			)}
		</Style.ImageContainer>
	);
}

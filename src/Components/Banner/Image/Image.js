import PropTypes from "prop-types";
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

Image.propTypes = {
	data: PropTypes.object,
	isPending: PropTypes.bool.isRequired,
};

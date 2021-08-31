import PropTypes from "prop-types";
import { Components } from "../../../Style";
import * as Style from "./Name.style";

export function Name({ data, isPending }) {
	return (
		<Style.Name>
			{isPending && <Components.SkeletonLoadingText head={true} />}
			{data && data.name}
		</Style.Name>
	);
}

Name.propTypes = {
	data: PropTypes.object,
	isPending: PropTypes.bool.isRequired,
};

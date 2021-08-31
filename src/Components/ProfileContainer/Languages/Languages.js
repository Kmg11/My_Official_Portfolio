import PropTypes from "prop-types";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Styled from "./Languages.style";

export function Languages({ response }) {
	const { data, isPending } = response;

	return (
		<Styled.Languages>
			<Box
				title="skills"
				icon={faLanguage}
				isPending={isPending}
				data={data}
				section="languages"
			/>
		</Styled.Languages>
	);
}

Languages.propTypes = {
	response: PropTypes.object.isRequired,
};

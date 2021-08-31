import PropTypes from "prop-types";
import { Banner } from "../Banner/Banner";
import { Summary } from "./Summary/Summary";
import { Skills } from "./Skills/Skills";
import { Languages } from "./Languages/Languages";
import * as Style from "./ProfileContainer.style";

export function ProfileContainer({ response }) {
	return (
		<Style.ProfileContainer>
			<Style.BannerContainer>
				<Banner response={response} />
			</Style.BannerContainer>

			<Summary response={response} />
			<Skills response={response} />
			<Languages response={response} />
		</Style.ProfileContainer>
	);
}

ProfileContainer.propTypes = {
	response: PropTypes.object.isRequired,
};

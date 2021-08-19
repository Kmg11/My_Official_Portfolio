import { Banner } from "../Banner/Banner";
import { Summary } from "./Summary/Summary";
import { Skills } from "./Skills/Skills";
import { Languages } from "./Languages/Languages";
import * as Style from "./ProfileContainer.style";

export function ProfileContainer({ response }) {
	const { data: info } = response;

	return (
		<Style.ProfileContainer>
			<Style.BannerContainer>
				<Banner response={response} />
			</Style.BannerContainer>

			<Summary info={info.summary} />
			<Skills info={info.skills} />
			<Languages info={info.languages} />
		</Style.ProfileContainer>
	);
}

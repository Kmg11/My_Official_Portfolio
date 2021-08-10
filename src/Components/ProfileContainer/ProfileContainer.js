import { Banner } from "../Banner/Banner";
import { Summary } from "./Summary/Summary";
import { MainSkills } from "./MainSkills/MainSkills";
import { AcquiredSkills } from "./AcquiredSkills/AcquiredSkills";
import { Languages } from "./Languages/Languages";
import * as Style from "./ProfileContainer.style";

export function ProfileContainer() {
	return (
		<Style.ProfileContainer>
			<Style.BannerContainer>
				<Banner />
			</Style.BannerContainer>

			<Summary />
			<MainSkills />
			<AcquiredSkills />
			<Languages />
		</Style.ProfileContainer>
	);
}

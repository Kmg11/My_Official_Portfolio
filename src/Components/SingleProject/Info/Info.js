import { useContext } from "react";
import { Slider } from "./Slider/Slider";
import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import { Components, Functions } from "../../../Style";
import { Features } from "./Left/Features/Features";
import { Notes } from "./Left/Notes/Notes";
import { HowToUse } from "./Left/HowToUse/HowToUse";
import { Technologies } from "./Right/Technologies/Technologies";
import { Tests } from "./Right/Tests/Tests";
import { Versions } from "./Right/Versions/Versions";
import { OtherLinks } from "./Right/OtherLinks/OtherLinks";
import { ProjectContext } from "../SingleProject";
import * as Style from "./Info.style";

export function Info() {
	const xs = Functions.mediaBreakpointDown("xs").replace("@media ", "");
	const {
		project: {
			technologies,
			features,
			notes,
			tests,
			versions,
			other_links,
			how_to_use,
		},
	} = useContext(ProjectContext);

	return (
		<Style.Info>
			<Components.Container>
				<Slider />

				<Style.Row>
					{window.matchMedia(xs).matches ? (
						<>
							{technologies && <Technologies />}
							{features && <Features />}
							{notes && <Notes />}
							{tests && <Tests />}
							{versions && <Versions />}
							{other_links && <OtherLinks />}
							{how_to_use && <HowToUse />}
						</>
					) : (
						<>
							<Left />
							<Right />
						</>
					)}
				</Style.Row>
			</Components.Container>
		</Style.Info>
	);
}

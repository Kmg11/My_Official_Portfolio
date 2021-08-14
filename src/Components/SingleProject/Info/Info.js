import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import { Components, Functions } from "../../../Style";
import { Images } from "./Left/Images/Images";
import { Features } from "./Left/Features/Features";
import { Notes } from "./Left/Notes/Notes";
import { HowToUse } from "./Left/HowToUse/HowToUse";
import { Description } from "./Right/Description/Description";
import { Technologies } from "./Right/Technologies/Technologies";
import { Tests } from "./Right/Tests/Tests";
import { Versions } from "./Right/Versions/Versions";
import { Links } from "./Right/Links/Links";
import * as Style from "./Info.style";

export function Info() {
	const xs = Functions.mediaBreakpointDown("xs").replace("@media ", "");
	return (
		<Components.Container>
			<Style.Info>
				{window.matchMedia(xs).matches ? (
					<>
						<Description />
						<Images />
						<Technologies />
						<Features />
						<Notes />
						<Tests />
						<Versions />
						<Links />
						<HowToUse />
					</>
				) : (
					<>
						<Left />
						<Right />
					</>
				)}
			</Style.Info>
		</Components.Container>
	);
}

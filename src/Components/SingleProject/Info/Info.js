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
import { Links } from "./Right/Links/Links";
import * as Style from "./Info.style";

export function Info() {
	const xs = Functions.mediaBreakpointDown("xs").replace("@media ", "");
	return (
		<Style.Info>
			<Components.Container>
				<Slider />

				<Style.Row>
					{window.matchMedia(xs).matches ? (
						<>
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
				</Style.Row>
			</Components.Container>
		</Style.Info>
	);
}

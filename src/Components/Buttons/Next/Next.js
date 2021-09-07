import { Routes } from "../../../Constants";
import * as Style from "./Next.style";

export function NextButton() {
	return (
		<Style.NextButton to={Routes.PROJECTS} aria-label="Go To Projects Page">
			<Style.Arrows>
				<Style.Arrow />
				<Style.Arrow />
				<Style.Arrow />
			</Style.Arrows>
		</Style.NextButton>
	);
}

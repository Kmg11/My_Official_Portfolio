import { faTools } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Style from "./MainSkills.style";

export function MainSkills() {
	return (
		<Style.MainSkills>
			<Box
				title="Core Proficiencies"
				icon={faTools}
				items={[
					"Html",
					"Css",
					"Javascript",
					"Jquery",
					"Bootstrap",
					"Sass",
					"Pug",
					"Gulp",
					"Git",
					"Github",
				]}
			/>
		</Style.MainSkills>
	);
}

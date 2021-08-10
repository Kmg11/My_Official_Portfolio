import { faTools } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Style from "./AcquiredSkills.style";

export function AcquiredSkills() {
	return (
		<Style.AcquiredSkills>
			<Box
				title="acquired skills"
				icon={faTools}
				items={[
					"Problem Solving",
					"Planning",
					"Organized Code",
					"Debugging",
					"Working with APIS",
					"Search",
					"Write documentations",
					"Clean Code",
				]}
			/>
		</Style.AcquiredSkills>
	);
}

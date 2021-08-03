import { Categories } from "./Categories/Categories";
import { Slider } from "./Slider/Slider";
import * as Style from "./ProjectsContainer.style";

export function ProjectsContainer() {
	return (
		<Style.ProjectsContainer>
			<Categories />
			<Slider />
			<Slider />
		</Style.ProjectsContainer>
	);
}

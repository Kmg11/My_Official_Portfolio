import { Title } from "./Title/Title";
import { Categories } from "./Categories/Categories";
import { Slider } from "./Slider/Slider";
import * as Style from "./ProjectsContainer.style";

export function ProjectsContainer() {
	return (
		<Style.ProjectsContainer>
			{/* <Title /> */}
			{/* <Categories /> */}
			<Slider />
		</Style.ProjectsContainer>
	);
}

import { useContext } from "react";
import { Slider } from "../Slider/Slider";
import { TemplatesContext } from "../ProjectsContainer";

export function Top({ setProjectsPage, pageType }) {
	const { templates } = useContext(TemplatesContext);

	return (
		<>
			{templates && (
				<Slider
					data={templates}
					setProjectsPage={setProjectsPage}
					pageType={pageType.TEMPLATES}
				/>
			)}
			{/* <Slider /> */}
		</>
	);
}

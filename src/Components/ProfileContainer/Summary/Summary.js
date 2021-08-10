import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Style from "./Summary.style";

export function Summary() {
	return (
		<Style.Summary>
			<Box
				title="front end web developer"
				icon={faInfo}
				items={[
					"An innovative front-end web developer with 1.5 years of education in front-end web development and building and maintaining responsive websites. Proficient in HTML, CSS and JavaScript as well as modern libraries and frameworks such as React. Passionate about usability. Maintains up to date awareness of technological trends and technological advances.",
				]}
			/>
		</Style.Summary>
	);
}

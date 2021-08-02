import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import * as Style from "./Title.style";

export function Title() {
	return (
		<Style.Title>
			<Style.TitleIcon>
				<FontAwesomeIcon icon={faWrench} />
			</Style.TitleIcon>
			<Style.TitleName>Projects</Style.TitleName>
		</Style.Title>
	);
}

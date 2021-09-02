import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { InfoContext } from "../Card";
import {
	CircleButtons,
	CircleButton,
} from "../../../Buttons/CircleButtons/CircleButtons";
import * as Style from "./Buttons.style";

export function Buttons() {
	const info = useContext(InfoContext);

	return (
		<Style.Buttons>
			<CircleButtons isPending={false} object={info} section="links">
				<CircleButton name="github" icon={faGithub} text="github" />
				<CircleButton name="live" icon={faWifi} text="live" />
			</CircleButtons>
		</Style.Buttons>
	);
}

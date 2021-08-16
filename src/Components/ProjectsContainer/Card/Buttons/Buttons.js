import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { CircleButtons } from "../../../Buttons/CircleButtons/CircleButtons";
import * as Style from "./Buttons.style";

export function Buttons() {
	return (
		<Style.Buttons>
			<CircleButtons
				info={[
					{ href: "/", icon: faGithub, text: "github" },
					{ href: "/", icon: faWifi, text: "live" },
				]}
			/>
		</Style.Buttons>
	);
}

import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { CircleButtons } from "../../../Buttons/CircleButtons/CircleButtons";
import { InfoContext } from "../Card";
import * as Style from "./Buttons.style";

export function Buttons() {
	const { links } = useContext(InfoContext);

	return (
		<Style.Buttons>
			<CircleButtons
				info={[
					{ href: links.github, icon: faGithub, text: "github" },
					{ href: links.live, icon: faWifi, text: "live" },
				]}
			/>
		</Style.Buttons>
	);
}

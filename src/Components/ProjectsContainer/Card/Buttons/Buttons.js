import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { CircleButtons } from "../../../Buttons/CircleButtons/CircleButtons";
import { InfoContext } from "../Card";
import * as Style from "./Buttons.style";

export function Buttons() {
	const { links } = useContext(InfoContext);

	const linksList = [
		{ href: links.github, icon: faGithub, text: "github" },
		{ href: links.live, icon: faWifi, text: "live" },
	];

	const finalLinks = links.live ? linksList : linksList.slice(0, 1);

	return (
		<Style.Buttons>
			<CircleButtons info={finalLinks} />
		</Style.Buttons>
	);
}

import { useContext } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { InfoContext } from "../Card";
import { CircleButtons, Button } from "../../../Buttons/Circle/Circle";
import * as Style from "./Buttons.style";

export function Buttons() {
	const info = useContext(InfoContext);

	return (
		<Style.Buttons>
			<CircleButtons
				isPending={false}
				object={info}
				section="links"
				isStatic={false}
			>
				<Button name="github" icon={faGithub}>
					github
				</Button>
				<Button name="live" icon={faWifi}>
					live
				</Button>
			</CircleButtons>
		</Style.Buttons>
	);
}

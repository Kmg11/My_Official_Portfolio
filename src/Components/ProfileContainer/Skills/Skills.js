import { faTools } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Style from "./Skills.style";

export function Skills({ info }) {
	return (
		<Style.Skills>
			<Box title="Core Proficiencies" icon={faTools} items={info} />
		</Style.Skills>
	);
}

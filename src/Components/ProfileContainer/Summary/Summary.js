import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Style from "./Summary.style";

export function Summary({ info }) {
	return (
		<Style.Summary>
			<Box title="front end web developer" icon={faInfo} items={[info]} />
		</Style.Summary>
	);
}

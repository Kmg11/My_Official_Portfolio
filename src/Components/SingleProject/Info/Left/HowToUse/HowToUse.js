import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./HowToUse.style";

export function HowToUse() {
	return (
		<Style.HowToUse>
			<Box
				title="how to use"
				icon={faClipboard}
				items={[
					"Install node.js and npm",
					"Open teminal",
					"npm run mock",
					"npm start",
				]}
			/>
		</Style.HowToUse>
	);
}

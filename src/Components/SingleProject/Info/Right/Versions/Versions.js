import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./Versions.style";

export function Versions() {
	return (
		<Style.Versions>
			<Box
				title="versions"
				icon={faCodeBranch}
				items={[
					<Style.Link href="/" target="_blank">
						v3.0.0
					</Style.Link>,
					<Style.Link href="/" target="_blank">
						v2.0.0
					</Style.Link>,
					<Style.Link href="/" target="_blank">
						v1.0.0
					</Style.Link>,
				]}
			/>
		</Style.Versions>
	);
}

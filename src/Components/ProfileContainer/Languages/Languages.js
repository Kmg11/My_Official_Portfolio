import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../Box/Box";
import * as Styled from "./Languages.style";

export function Languages() {
	return (
		<Styled.Languages>
			<Box title="Languages" icon={faLanguage} items={["English", "Arabic"]} />
		</Styled.Languages>
	);
}

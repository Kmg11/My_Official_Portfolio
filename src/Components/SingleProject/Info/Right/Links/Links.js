import { faLink } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../../../../Box/Box";
import * as Style from "./Links.style";

export function Links() {
	return (
		<Style.Links>
			<Box
				title="links"
				icon={faLink}
				items={[
					<Style.Link href="/" target="_blank" rel="noreferrer">
						Live Preview On Netlfy
					</Style.Link>,
					<Style.Link href="/" target="_blank" rel="noreferrer">
						Live Preview On Vercel
					</Style.Link>,
				]}
			/>
		</Style.Links>
	);
}

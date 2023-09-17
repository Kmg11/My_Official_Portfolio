import { Components } from "../../../Style";
import { CoverImage } from "./CoverImage/CoverImage";
import { Badge } from "./Badge/Badge";
import { Name } from "./Name/Name";
import { Description } from "./Description/Description";
import { Links } from "./Links/Links";
import * as Style from "./Header.style";

export function Header() {
	return (
		<Style.Header initial="hidden" animate="visible">
			<CoverImage />

			<Components.Container>
				<Style.Content>
					<Badge />
					<Name />
					<Description />
					<Links />
				</Style.Content>
			</Components.Container>
		</Style.Header>
	);
}

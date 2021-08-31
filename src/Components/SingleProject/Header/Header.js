import { useSelector } from "react-redux";
import { Components } from "../../../Style";
import { CoverImage } from "./CoverImage/CoverImage";
import { Badge } from "./Badge/Badge";
import { Name } from "./Name/Name";
import { Description } from "./Description/Description";
import { Links } from "./Links/Links";
import * as Style from "./Header.style";

export function Header() {
	const navbarHeight = useSelector((state) => state.navbarSize.height);

	return (
		<Style.Header navbarHeight={navbarHeight}>
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

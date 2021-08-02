import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGlobeAmericas,
	faSortAlphaUp,
} from "@fortawesome/free-solid-svg-icons";
import * as Style from "./Categories.style";

export function Categories() {
	return (
		<Style.Categories>
			<Style.Button>
				<Style.Icon>
					<FontAwesomeIcon icon={faSortAlphaUp} />
				</Style.Icon>
				<Style.Name>Top</Style.Name>
			</Style.Button>

			<Style.Button>
				<Style.Icon>
					<FontAwesomeIcon icon={faGlobeAmericas} />
				</Style.Icon>
				<Style.Name>All</Style.Name>
			</Style.Button>
		</Style.Categories>
	);
}

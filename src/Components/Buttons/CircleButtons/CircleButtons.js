import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Style from "./CircleButtons.style";

export function CircleButtons({ info }) {
	return (
		<Style.Buttons>
			{info.map(({ href, icon, text }) => {
				return (
					<Style.Button key={text} href={href} target="_blank" rel="noreferrer">
						<Style.ButtonIcon>
							<FontAwesomeIcon icon={icon} fixedWidth />
						</Style.ButtonIcon>
						<Style.ButtonName>{text}</Style.ButtonName>
					</Style.Button>
				);
			})}
		</Style.Buttons>
	);
}

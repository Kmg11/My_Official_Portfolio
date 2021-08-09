import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Components } from "../../../../Style";
import * as Style from "./Box.style";

export function Box({ title, icon, items }) {
	return (
		<>
			<Components.SubTitle>{title}</Components.SubTitle>

			<Style.List>
				{items.map((text) => {
					return (
						<Style.Item key={text}>
							<Style.Icon>
								<FontAwesomeIcon icon={icon} fixedWidth />
							</Style.Icon>
							<Style.Text>{text}</Style.Text>
						</Style.Item>
					);
				})}
			</Style.List>
		</>
	);
}

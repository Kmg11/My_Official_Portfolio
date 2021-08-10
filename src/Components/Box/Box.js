import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Components } from "../../Style";
import * as Style from "./Box.style";

export function Box({ title, icon, items }) {
	return (
		<>
			<Components.SubTitle>{title}</Components.SubTitle>

			<Style.List>
				{items.map((item, index) => {
					return (
						<Style.Item key={index}>
							<Style.Icon>
								<FontAwesomeIcon icon={icon} fixedWidth />
							</Style.Icon>

							{typeof item === "string" ? (
								<Style.Text>{item}</Style.Text>
							) : (
								item
							)}
						</Style.Item>
					);
				})}
			</Style.List>
		</>
	);
}

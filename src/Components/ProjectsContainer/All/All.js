import { Card } from "../Card/Card";
import * as Style from "./All.style";

export function All({ data }) {
	return (
		<Style.Cards>
			{data.map((item) => {
				return <Card key={item.id} data={item} />;
			})}
		</Style.Cards>
	);
}

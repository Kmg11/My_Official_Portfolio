import { Image } from "./Image/Image";
import { Go } from "./Go/Go";
import { Buttons } from "./Buttons/Buttons";
import { Info } from "./Info/Info";
import * as Style from "./Card.style";

export function Card() {
	return (
		<Style.Card>
			<Image />
			<Go />
			<Buttons />
			<Info />
		</Style.Card>
	);
}

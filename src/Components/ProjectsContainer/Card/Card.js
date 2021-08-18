import { createContext } from "react";
import { Image } from "./Image/Image";
import { Go } from "./Go/Go";
import { Buttons } from "./Buttons/Buttons";
import { Info } from "./Info/Info";
import * as Style from "./Card.style";

export const InfoContext = createContext();

export function Card({ info }) {
	return (
		<InfoContext.Provider value={info}>
			<Style.Card>
				<Image />
				<Go />
				<Buttons />
				<Info />
			</Style.Card>
		</InfoContext.Provider>
	);
}

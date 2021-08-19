import { createContext, useRef, useState } from "react";
import { Image } from "./Image/Image";
import { Go } from "./Go/Go";
import { Buttons } from "./Buttons/Buttons";
import { Info } from "./Info/Info";
import * as Style from "./Card.style";

export const InfoContext = createContext();

export function Card({ info }) {
	const { images } = info;
	const [imageNumber, setImageNumber] = useState(1);

	let timer = useRef(0);

	const handleOnMouseEnter = () => {
		setImageNumber((prev) => prev + 1);

		timer.current = setInterval(() => {
			setImageNumber((prev) =>
				prev >= images.number_of_images ? 1 : prev + 1
			);
		}, 1000);
	};

	const handleOnMouseLeave = () => {
		setImageNumber(1);
		clearInterval(timer.current);
	};

	return (
		<InfoContext.Provider value={info}>
			<Style.Card
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
			>
				<Image imageNumber={imageNumber} />
				<Go />
				<Buttons />
				<Info />
			</Style.Card>
		</InfoContext.Provider>
	);
}

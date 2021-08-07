import { useState } from "react";
import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import { BoxButtons } from "../../Buttons/BoxButtons//BoxButtons";
import * as Style from "./Info.style";

const SIMPLE = "SIMPLE";
const ADVANCED = "ADVANCED";

export function Info() {
	const [infoPage, setInfoPage] = useState(SIMPLE);

	return (
		<Style.Info>
			<Style.Buttons>
				<BoxButtons
					page={infoPage}
					setPage={setInfoPage}
					info={[
						{ pageType: SIMPLE, text: "simple" },
						{ pageType: ADVANCED, text: "advanced" },
					]}
				/>
			</Style.Buttons>

			<Style.Content>
				<Left />
				<Right />
			</Style.Content>
		</Style.Info>
	);
}

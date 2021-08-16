import * as Style from "./Info.style";

export function Info() {
	return (
		<Style.Info>
			<Style.Box>
				<Style.Title>Apple</Style.Title>
				<Style.Description>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo
					provident error nulla est quod nam libero dolorum laudantium rem.
				</Style.Description>
			</Style.Box>

			<Style.Box>
				<Style.Title>Technolgy Used</Style.Title>
				<Style.List>
					<Style.Item>Html</Style.Item>
					<Style.Item>Css</Style.Item>
					<Style.Item>Javascript</Style.Item>
					<Style.Item>jQuery</Style.Item>
					<Style.Item>Bootstrap</Style.Item>
				</Style.List>
			</Style.Box>
		</Style.Info>
	);
}

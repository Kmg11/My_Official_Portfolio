import { Images as ImagesPath } from "../../../../Constants";
import * as Style from "./Left.style";

export function Left() {
	return (
		<Style.Left>
			<Images />
			<Technologies />
		</Style.Left>
	);
}

function Images() {
	return (
		<Style.Images>
			<Style.Title>images</Style.Title>

			<Style.ImagesContainer>
				<Style.ImageContainer>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageContainer>
				<Style.ImageContainer>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageContainer>
				<Style.ImageContainer>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageContainer>
				<Style.ImageContainer>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageContainer>
				<Style.ImageContainer>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageContainer>
				<Style.ImageContainer>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageContainer>
			</Style.ImagesContainer>
		</Style.Images>
	);
}

function Technologies() {
	return (
		<Style.Technologies>
			<Style.Title>technologies</Style.Title>

			<Style.TechnologiesContainer>
				<Style.Technology href="/" target="_blank">html</Style.Technology>
				<Style.Technology href="/" target="_blank">css</Style.Technology>
				<Style.Technology href="/" target="_blank">javascript</Style.Technology>
				<Style.Technology href="/" target="_blank">jquery</Style.Technology>
				<Style.Technology href="/" target="_blank">bootstrap</Style.Technology>
				<Style.Technology href="/" target="_blank">sass</Style.Technology>
				<Style.Technology href="/" target="_blank">gulp</Style.Technology>
				<Style.Technology href="/" target="_blank">html</Style.Technology>
				<Style.Technology href="/" target="_blank">css</Style.Technology>
				<Style.Technology href="/" target="_blank">javascript</Style.Technology>
				<Style.Technology href="/" target="_blank">jquery</Style.Technology>
				<Style.Technology href="/" target="_blank">bootstrap</Style.Technology>
				<Style.Technology href="/" target="_blank">sass</Style.Technology>
				<Style.Technology href="/" target="_blank">gulp</Style.Technology>
			</Style.TechnologiesContainer>
		</Style.Technologies>
	)
}
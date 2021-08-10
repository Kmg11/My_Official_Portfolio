import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { Images as ImagesPath } from "../../../../../Constants";
import { Box } from "../../../../Box/Box";
import * as Style from "./Images.style";

export function Images() {
	return (
		<Style.Images>
			<Box
				title="images"
				icon={faFileImage}
				items={[
					<Style.ImageContainer>
						<Style.Image
							src={`${ImagesPath.TEMPLATES}/Apple.png`}
							alt="Project Images"
						/>
					</Style.ImageContainer>,
					<Style.ImageContainer>
						<Style.Image
							src={`${ImagesPath.TEMPLATES}/Apple.png`}
							alt="Project Images"
						/>
					</Style.ImageContainer>,
					<Style.ImageContainer>
						<Style.Image
							src={`${ImagesPath.TEMPLATES}/Apple.png`}
							alt="Project Images"
						/>
					</Style.ImageContainer>,
					<Style.ImageContainer>
						<Style.Image
							src={`${ImagesPath.TEMPLATES}/Apple.png`}
							alt="Project Images"
						/>
					</Style.ImageContainer>,
					<Style.ImageContainer>
						<Style.Image
							src={`${ImagesPath.TEMPLATES}/Apple.png`}
							alt="Project Images"
						/>
					</Style.ImageContainer>,
					<Style.ImageContainer>
						<Style.Image
							src={`${ImagesPath.TEMPLATES}/Apple.png`}
							alt="Project Images"
						/>
					</Style.ImageContainer>,
				]}
			/>
		</Style.Images>
	);
}

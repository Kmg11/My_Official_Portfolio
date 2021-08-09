import { Images as ImagesPath } from "../../../../../Constants";
import { Components } from "../../../../../Style";
import * as Style from "./Images.style";

export function Images() {
	return (
		<Style.Images>
			<Components.SubTitle>images</Components.SubTitle>

			<Style.ImagesList>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
				<Style.ImageItem>
					<Style.Image
						src={`${ImagesPath.TEMPLATES}/Apple.png`}
						alt="Project Images"
					/>
				</Style.ImageItem>
			</Style.ImagesList>
		</Style.Images>
	);
}

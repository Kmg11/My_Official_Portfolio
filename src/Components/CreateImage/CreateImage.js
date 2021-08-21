import * as Style from "./CreateImage.style";

export function CreateImage({ src, alt }) {
	return (
		<picture>
			<source srcSet={`${src}.webp`} type="image/webp" />
			<source srcSet={`${src}.png`} type="image/png" />
			<Style.Image src={`${src}.png`} alt={alt} />
		</picture>
	);
}

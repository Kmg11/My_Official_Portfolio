import { SocialLinks } from "./SocialLinks/SocialLinks";
import { Image } from "./Image/Image";
import { Name } from "./Name/Name";
import { Description } from "./Description/Description";
import * as Style from "./Banner.style";

export function Banner({ response }) {
	const { data, isPending } = response;

	return (
		<Style.Banner>
			<Style.Row>
				<Image data={data} isPending={isPending} />

				<Style.Info>
					<Name data={data} isPending={isPending} />
					<Description data={data} isPending={isPending} />
					<SocialLinks data={data} isPending={isPending} />
				</Style.Info>
			</Style.Row>
		</Style.Banner>
	);
}

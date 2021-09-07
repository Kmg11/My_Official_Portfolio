import PropTypes from "prop-types";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import { Image } from "./Image/Image";
import { Name } from "./Name/Name";
import { Description } from "./Description/Description";
import * as Style from "./Banner.style";

const bannerVariants = {
	exit: {
		scale: 1.5,
		opacity: 0,
		transition: { duration: 0.5 },
	},
};

export function Banner({ response }) {
	const { data, isPending } = response;

	return (
		<Style.Banner
			variants={bannerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Image data={data} isPending={isPending} />

			<Style.Info>
				<Name data={data} isPending={isPending} />
				<Description data={data} isPending={isPending} />
				<SocialLinks data={data} isPending={isPending} />
			</Style.Info>
		</Style.Banner>
	);
}

Banner.propTypes = {
	response: PropTypes.object.isRequired,
};

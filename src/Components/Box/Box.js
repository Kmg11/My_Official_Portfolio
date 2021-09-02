import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Components } from "../../Style";
import * as Style from "./Box.style";

export function Box({ title, icon, isPending, data, section, isLink = false }) {
	const SkeletonLoading =
		isPending &&
		[...new Array(4).keys()].map((item) => {
			return (
				<Style.Item key={item}>
					<Components.SkeletonLoadingBox width="20px" height="20px" />
					<Components.SkeletonLoadingText width="100%" />
				</Style.Item>
			);
		});

	return !isPending && data && data[section] ? (
		<Style.Box>
			<Components.SubTitle>{title}</Components.SubTitle>
			<Style.List>
				{data[section].map((item, index) => {
					return (
						<Style.Item key={index}>
							<Style.Icon>
								<FontAwesomeIcon icon={icon} fixedWidth />
							</Style.Icon>

							{isLink ? (
								<Style.Link
									key={index}
									href={item.link}
									target="_blank"
									rel="noreferrer"
								>
									{item.name}
								</Style.Link>
							) : (
								<Style.Text>{item}</Style.Text>
							)}
						</Style.Item>
					);
				})}
			</Style.List>
		</Style.Box>
	) : (
		isPending && (
			<Style.Box>
				<Components.SubTitle>
					<Components.SkeletonLoadingText head width="100px" />
				</Components.SubTitle>

				<Style.List>{SkeletonLoading}</Style.List>
			</Style.Box>
		)
	);
}

Box.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
	isPending: PropTypes.bool.isRequired,
	data: PropTypes.object,
	section: PropTypes.string.isRequired,
	isLink: PropTypes.bool,
};

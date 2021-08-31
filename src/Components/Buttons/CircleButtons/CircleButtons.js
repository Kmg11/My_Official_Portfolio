import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Components } from "../../../Style";
import * as Style from "./CircleButtons.style";

export function CircleButtons({ info, skeleton }) {
	return (
		<Style.Buttons>
			{skeleton
				? [...new Array(2).keys()].map((item) => {
						return (
							<Style.Button key={item} href="" target="_blank" rel="noreferrer">
								<Style.ButtonIcon skeleton={skeleton}>
									<Components.SkeletonLoadingBox />
								</Style.ButtonIcon>
								<Style.ButtonName>
									<Components.SkeletonLoadingText width="60px" />
								</Style.ButtonName>
							</Style.Button>
						);
				  })
				: info.map(({ href, icon, text }) => {
						return (
							<Style.Button
								key={text}
								href={href}
								target="_blank"
								rel="noreferrer"
							>
								<Style.ButtonIcon>
									<FontAwesomeIcon icon={icon} fixedWidth />
								</Style.ButtonIcon>
								<Style.ButtonName>{text}</Style.ButtonName>
							</Style.Button>
						);
				  })}
		</Style.Buttons>
	);
}

CircleButtons.propTypes = {
	info: PropTypes.array,
	skeleton: PropTypes.bool,
};

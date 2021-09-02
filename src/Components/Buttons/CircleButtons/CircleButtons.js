import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Components } from "../../../Style";
import { createContext, useContext } from "react";
import * as Style from "./CircleButtons.style";

const ButtonContext = createContext();

export function CircleButtons({ children, isPending, object, section }) {
	const contextValue = { object, section };

	return (
		<Style.Buttons>
			{!isPending && object && object[section] ? (
				<ButtonContext.Provider value={contextValue}>
					{children}
				</ButtonContext.Provider>
			) : (
				isPending &&
				[...new Array(2).keys()].map((item) => {
					return (
						<Style.Button as="div" key={item}>
							<Components.SkeletonLoadingBox
								width="40px"
								height="40px"
								radius="50%"
							/>
							<Components.SkeletonLoadingText width="60px" />
						</Style.Button>
					);
				})
			)}
		</Style.Buttons>
	);
}

export function CircleButton({ name, icon, text }) {
	const { object, section } = useContext(ButtonContext);

	return object[section][name] ? (
		<Style.Button href={object[section][name]} target="_blank" rel="noreferrer">
			<Style.ButtonIcon>
				<FontAwesomeIcon icon={icon} fixedWidth />
			</Style.ButtonIcon>
			<Style.ButtonName>{text}</Style.ButtonName>
		</Style.Button>
	) : null;
}

CircleButtons.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element.isRequired),
		PropTypes.element.isRequired,
	]),
	isPending: PropTypes.bool.isRequired,
	object: PropTypes.object,
	section: PropTypes.string.isRequired,
};

CircleButton.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
};

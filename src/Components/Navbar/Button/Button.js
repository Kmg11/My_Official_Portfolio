import PropTypes from "prop-types";
import * as Style from "./Button.style";

export function Button({ isOpen, setIsOpen }) {
	return (
		<Style.Button onClick={() => setIsOpen((prev) => !prev)}>
			<Style.Line isOpen={isOpen} />
			<Style.Line isOpen={isOpen} />
			<Style.Line isOpen={isOpen} />
		</Style.Button>
	);
}

Button.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};

import PropTypes from "prop-types";
import * as Style from "./Button.style";

const buttonVariants = {
	hidden: { opacity: 0, scale: 0.7 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export function Button({ isOpen, setIsOpen }) {
	return (
		<Style.Button
			onClick={() => setIsOpen((prev) => !prev)}
			variants={buttonVariants}
		>
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

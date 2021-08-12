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

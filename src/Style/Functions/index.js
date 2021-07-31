export const overlay = (backgroundColor) => {
	return {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: 2,
		backgroundColor: backgroundColor,
	};
};

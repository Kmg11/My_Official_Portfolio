import { NavbarTypes } from "../Types";

export const navbarWidth = (state = 0, action) => {
	let width = state;

	switch (action.type) {
		case NavbarTypes.SET_NAVBAR_WIDTH:
			width = action.payload;
			return width;
		default:
			return width;
	}
};

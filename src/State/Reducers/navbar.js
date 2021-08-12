import { NavbarTypes } from "../Types";

export const navbarSize = (state = { width: 0, height: 0 }, action) => {
	let size = state;

	switch (action.type) {
		case NavbarTypes.SET_NAVBAR_SIZE:
			size = { width: action.payload.width, height: action.payload.height };
			return size;
		default:
			return size;
	}
};

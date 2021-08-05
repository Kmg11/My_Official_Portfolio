import { NavbarTypes } from "../Types";

export function setNavbarWidth(width) {
	return (dispatch) =>
		dispatch({ type: NavbarTypes.SET_NAVBAR_WIDTH, payload: width });
}

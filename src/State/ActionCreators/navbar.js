import { NavbarTypes } from "../Types";

export function setNavbarSize(size) {
	return (dispatch) =>
		dispatch({ type: NavbarTypes.SET_NAVBAR_SIZE, payload: size });
}

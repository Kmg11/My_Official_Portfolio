import { useEffect } from "react";

export const useEscapeKey = (callback) => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				callback();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [callback]);
};

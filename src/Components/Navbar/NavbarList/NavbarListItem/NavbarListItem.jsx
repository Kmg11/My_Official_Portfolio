import React from "react";
import * as Style from "./NavbarListItem.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const itemVariants = {
	hidden: { opacity: 0, scale: 0.7 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export const NavbarListItem = ({ icon, name, linkProps }) => {
	return (
		<Style.Item variants={itemVariants}>
			<Style.Link {...linkProps}>
				<Style.Icon>
					<FontAwesomeIcon icon={icon} />
				</Style.Icon>
				<Style.Name>{name}</Style.Name>
			</Style.Link>
		</Style.Item>
	);
};

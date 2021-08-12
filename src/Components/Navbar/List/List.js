import { forwardRef } from "react";
import { Routes } from "../../../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Style from "./List.style";
import {
	faWrench,
	faUserAlt,
	faScroll,
	faHome,
} from "@fortawesome/free-solid-svg-icons";

export function ListComponent({ isOpen }, ref) {
	return (
		<Style.List
			isOpen={isOpen}
			ref={ref}
			onclick={(e) => {
				e.stopPropagation();
			}}
		>
			<Style.Item>
				<Style.Link exact to={Routes.HOME}>
					<Style.Icon>
						<FontAwesomeIcon icon={faHome} />
					</Style.Icon>
					<Style.Name>home</Style.Name>
				</Style.Link>
			</Style.Item>

			<Style.Item>
				<Style.Link to={Routes.PROJECTS}>
					<Style.Icon>
						<FontAwesomeIcon icon={faWrench} />
					</Style.Icon>
					<Style.Name>projects</Style.Name>
				</Style.Link>
			</Style.Item>

			<Style.Item>
				<Style.Link to={Routes.PROFILE}>
					<Style.Icon>
						<FontAwesomeIcon icon={faUserAlt} />
					</Style.Icon>
					<Style.Name>profile</Style.Name>
				</Style.Link>
			</Style.Item>

			<Style.Item>
				<Style.Link to={Routes.CV}>
					<Style.Icon>
						<FontAwesomeIcon icon={faScroll} />
					</Style.Icon>
					<Style.Name>cv</Style.Name>
				</Style.Link>
			</Style.Item>
		</Style.List>
	);
}

export const List = forwardRef(ListComponent);

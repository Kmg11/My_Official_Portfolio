import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Variables } from "../../Style";

export const Navbar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 2;
	min-height: 100vh;
	background-color: ${Variables.Colors.forgroundColor};
	padding: 20px 10px 20px 10px;
	border-radius: 0 30px 30px 0;
	text-align: center;
`;

export const ImageContainer = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	overflow: hidden;
	margin-bottom: 4rem;
`;

export const Image = styled.img``;

export const List = styled.ul`
	padding: 0;
	margin: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Item = styled.li`
	&:not(:last-of-type) {
		margin-bottom: 30px;
	}
`;

export const LinkName = styled.span`
	position: absolute;
	top: 50%;
	right: 0;
	z-index: 3;
	transform: translate(10%, -50%);
	background-color: ${Variables.Colors.whiteBackgroundColor};
	color: ${Variables.Colors.mainColor};
	padding: 8px 10px;
	border-radius: 10px;
	font-size: 0.9rem;
	display: block;
	font-weight: 500;
	opacity: 0;
	width: 80px;
	transition: all 0.3s linear;
`;

export const LinkIcon = styled.span`
	display: block;
	margin-bottom: 2px;
	font-size: 1.2rem;
`;

export const ItemLink = styled(NavLink)`
	position: relative;
	display: block;
	color: ${Variables.Colors.textColor};
	width: 55px;
	height: 55px;
	border-radius: 50%;
	display: grid;
	place-items: center;
	transition: all 0.3s linear;
	margin: auto;

	&:hover,
	&.active {
		color: ${Variables.Colors.mainColor};
		background-color: ${Variables.Colors.whiteBackgroundColor};
	}

	&:hover {
		${LinkName} {
			opacity: 1;
			transform: translate(120%, -50%);
		}
	}
`;

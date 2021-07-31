import styled from "styled-components";
import { Variables } from "../../Style";

export const BannerStyle = styled.section`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -70%);
	z-index: 3;
	width: max-content;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 20px;
	place-items: center;
`;

export const ImageContainer = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 50%;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Info = styled.div``;

export const Name = styled.h1`
	color: ${Variables.Colors.titlesColor};
	margin: 0;
`;

export const Description = styled.p`
	color: ${Variables.Colors.titlesColor};
	font-size: 1.2rem;
	font-weight: bold;
	margin-top: 10px;
	margin-bottom: 10px;
	width: 300px;
	line-height: 1.7;
`;

export const SocialLinks = styled.ul`
	padding: 0;
	margin: 0;
`;

export const Items = styled.li`
	display: inline-block;

	&:not(:last-of-type) {
		margin-right: 10px;
	}
`;

export const Link = styled.a`
	color: ${Variables.Colors.titlesColor};
	font-size: 2rem;
	display: block;
`;

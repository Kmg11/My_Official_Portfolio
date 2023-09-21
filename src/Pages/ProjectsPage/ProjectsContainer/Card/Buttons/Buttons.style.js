import styled from 'styled-components';

export const Buttons = styled.div`
	position: absolute;
	bottom: 20px;
	left: 20px;
	right: 0;
	z-index: 4;
	width: max-content;
	opacity: 0;
	visibility: hidden;
	transition-property: visibility, opacity;
	transition: 0.2s linear;
`;

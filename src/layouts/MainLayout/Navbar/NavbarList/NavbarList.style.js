import styled, { css } from 'styled-components';
import { Functions } from '../../../../Style';

export const NavbarList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	${Functions.mediaBreakpointDown('sm')} {
		align-items: normal;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		min-height: 500px;
		height: 100vh;
		width: 200px;
		padding: 40px 15px;
		background-color: rgba(28, 38, 49, 0.95);
		transform: translateX(-100%);
		z-index: 1001;
		transition-property: transform, opacity;
		transition: 0.3s linear;

		${(props) => props.isNavbarOpen
			&& css`
				transform: translateX(0);
			`}
	}
`;
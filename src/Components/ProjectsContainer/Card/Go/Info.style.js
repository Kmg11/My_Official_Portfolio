import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Functions } from '../../../../Style';

export const Go = styled(Link)`
	${Functions.overlayTransparent}
	z-index: 3;
`;

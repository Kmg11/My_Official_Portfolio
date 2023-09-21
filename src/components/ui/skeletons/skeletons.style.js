import { css, keyframes } from 'styled-components';

const skeletonLoadingKeyFrame = keyframes`
	0% {
		opacity: .5;
    transform: translateY(6px) scale(0.98);
	}
	100% {
		opacity: 1;
    transform: translateY(0px) scale(1);
	}
`;

export const skeletonStyle = () => css`
  background-color: #213243;
  animation: ${skeletonLoadingKeyFrame} 1s linear infinite alternate;
`;

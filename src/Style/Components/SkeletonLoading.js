import styled, { css, keyframes } from "styled-components";

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

const skeletonLoading = () => {
	return css`
		background-color: #213243;
		animation: ${skeletonLoadingKeyFrame} 1s linear infinite alternate;
	`;
};

export const SkeletonLoadingBox = styled.div`
	${skeletonLoading};
	width: ${(props) => (props.width ? props.width : "100%")};
	height: ${(props) => (props.height ? props.height : "100%")};
	border-radius: ${(props) => (props.radius ? props.radius : "inherit")};
`;

export const SkeletonLoadingText = styled.span`
	${skeletonLoading};
	border-radius: 4px;
	display: block;

	${(props) =>
		props.head
			? css`
					height: 1.5rem;
					width: ${(props) => (props.width ? props.width : "100%")};
					margin-bottom: 0.625rem;
			  `
			: css`
					height: 1rem;

					&:not(:last-of-type) {
						width: ${(props) => (props.width ? props.width : "100%")};
						margin-bottom: 0.625rem;
					}

					&:last-of-type {
						width: ${(props) => (props.width ? props.width : "80%")};
					}
			  `}
`;

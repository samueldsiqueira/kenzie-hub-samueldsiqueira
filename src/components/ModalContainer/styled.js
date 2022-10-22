import styled from 'styled-components';

export const ContainerModal = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.bg-modal {
		background-color: var(--color-gray-2);
	}

	.close-modal {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 40px;
		align-items: center;
		padding: 0 1rem;
		button {
			background-color: transparent;
			border: none;
			&:hover {
				cursor: pointer;
				color: var(--color-error);
			}
		}
	}

	h1 {
		font-size: 1rem;
	}

	input {
		width: 100%;
	}
`;

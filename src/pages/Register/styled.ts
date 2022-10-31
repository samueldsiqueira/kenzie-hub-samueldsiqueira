import styled from 'styled-components';

export const RegisterContainer = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 18px 18px;
	margin: 0 auto;

	div {
		display: flex;
		width: 100%;
		max-width: 500px;
		justify-content: space-between;
		h1 {
			color: var(--primary-color);
		}
		.btn-back {
			background-color: var(--color-gray-2);
			color: var(--color-gray-0);
			display: inline-flex;
			align-items: center;
			justify-content: center;
			font-size: var(--font-size-lg);
			padding: 0 32px;
			margin: 0.5rem 0;
			border: 0;
			height: 48px;
			transition: filter 0.2s;
			border-radius: 5px;
			&:hover {
				filter: brightness(0.9);
			}
		}
	}
`;

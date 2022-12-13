import styled, { css } from 'styled-components';

interface iButtonProps {
	backgroundColor: string;
}

export const BtnComponent = styled.button<iButtonProps>`
	font-size: var(--font-size-lg);
	padding: 0 32px;
	margin: 0.5rem 0;
	border: 0;
	height: 48px;
	transition: filter 0.2s;
	border-radius: 5px;

	background-color: black;

	&:hover {
		filter: brightness(0.9);
	}
`;

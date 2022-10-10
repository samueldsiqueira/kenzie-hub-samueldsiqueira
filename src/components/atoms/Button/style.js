import styled, { css } from 'styled-components'


const bgColorType = {
  primary: css`
    background-color: var(--primary-color);
    &:hover {
      filter: brightness(0.9);
    }
    `,
  secondary: css`
    background-color: var(--secondary-color);
   &:hover {
      filter: brightness(0.9);
    }
  `,

  gray: css`
    background-color: var(--color-gray-2);
       &:hover {
      filter: brightness(0.9);
    }
  `,

  grayLight: css`
    background-color: var(--color-gray-1);
       &:hover {
      filter: brightness(0.9);
    }
  `,

  grayDark: css`
    background-color: var(--color-gray-3);
       &:hover {
      filter: brightness(80%);
    }
  `,

  black: css`
    background-color: var(--color-black);
       &:hover {
      filter: brightness(0.9);
    }
  `,

  error: css` background-color: var(--color-error);
     &:hover {
      filter: brightness(0.9);
    } `,

  success: css` background-color: var(--color-success);
     &:hover {
      filter: brightness(0.9);
    } `,
};

export const BtnComponent = styled.button`
  ${({ bgColor }) => bgColorType[bgColor || 'primary']}
  font-size: var(--font-size-lg);
  padding: 0 32px;
  border: 0;
  height: 48px;
  transition: filter 0.2s;
  &:hover {
  filter: brightness(0.9)
}
`
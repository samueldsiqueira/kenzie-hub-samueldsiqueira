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
    color: var(--color-gray-0);
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
  margin: 0.5rem 0;
  border: 0;
  /* width: 100%; */
  height: 48px;
  transition: filter 0.2s;
  border-radius: 5px;
  &:hover {
  filter: brightness(0.9)
}
`
import styled from 'styled-components'

import ButtonDefault from './ButtonDefault'

export const ButtonDefault = styled.button`
  font-size: var(--font-size-lg);
  color: var(--gray-0);
  background-color: ${({ color }) => color === 'primary' ? 'var(--primary-color)' : '  --secondary-color'};
  padding: 0 32px;
  border: 0;
  border-radius: 4px;
  height: 48px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9)
  }
`
import { styled } from '@linaria/react';

import { inputFocusStyles } from '../../styles/inputFocus';

export const Link = styled.a`

  color: var(--text-color);
  cursor: pointer;
  text-decoration: underline;

  &:focus {
    ${inputFocusStyles}
  }

  &:focus,
  &:hover {
    color: var(--color-focus);
  }

  &:active {
    color: var(--color-active);
  }
`;

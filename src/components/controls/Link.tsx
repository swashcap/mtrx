import { styled } from 'linaria/react';

export const Link = styled.a`

  color: var(--text-color);
  cursor: pointer;
  text-decoration: underline;

  &:focus,
  &:hover {
    color: var(--color-focus);
  }

  &:active {
    color: var(--color-active);
  }
`;

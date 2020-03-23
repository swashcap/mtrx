import { styled } from 'linaria/react';

export const TextInput = styled.input`
  background: var(--color-input-background);
  border-color: var(--color-border);
  border-radius: var(--border-radius);
  border-style: solid;
  border-width: var(--border-width);
  color: var(--color-text);
  display: block;
  font-family: inherit;
  font-weight: 400;
  line-height: inherit;
  padding: var(--spacing-100) var(--spacing-200);
  width: 100%;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`;

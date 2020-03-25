import React from 'react';
import { styled } from 'linaria/react';
import { StyledComponentProps } from '../../types';

const BaseButton = styled.button`

  background: var(--color-background);
  border-radius: 1px;
  border-width: var(--border-width);
  border-style: solid;
  border-color: transparent;
  color: var(--color-text);
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  margin: 0;
  padding: var(--spacing-100) var(--spacing-200);

  &:focus,
  &:hover {
    color: var(--color-focus);
  }

  &:active {
    color: var(--color-active);
  }
`;

export const Button: React.FC<StyledComponentProps<
  typeof BaseButton
>> = props => <BaseButton type="button" {...props} />;

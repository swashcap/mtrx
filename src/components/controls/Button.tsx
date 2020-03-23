import React from 'react';
import { styled } from 'linaria/react';
import { StyledComponentProps } from '../../types';

const BaseButton = styled.button`
  background: black;
  border-radius: 1px;
  border: 2px solid transparent;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  font: inherit;
  margin: 0;
  padding: 0.5rem 0.75rem;

  &:focus,
  &:hover {
    background: var(--color-focus);
  }
  &:active {
    background: var(--color-active);
  }
`;

export const Button: React.FC<StyledComponentProps<
  typeof BaseButton
>> = props => <BaseButton type="button" {...props} />;

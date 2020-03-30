import React from 'react';
import { cx } from 'linaria';
import { styled } from 'linaria/react';

import { inputFocusStyles } from '../../styles/inputFocus';

const BaseButton = styled.button`

  border-radius: 1px;
  border-width: var(--border-width);
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  margin: 0;
  padding: var(--spacing-100) var(--spacing-200);

  /* Variants */
  &.primary {
    background: var(--color-button-primary-background);
    color: var(--color-button-primary-color);
    font-weight: 700;
  }

  &.secondary {
    background: var(--color-button-secondary-background);
    color: var(--color-button-secondary-color);
    font-weight: 400;
  }

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

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  ...rest
}) => (
  <BaseButton
    className={cx(variant === 'primary' ? 'primary' : 'secondary', className)}
    type="button"
    {...rest}
  />
);

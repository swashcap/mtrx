import React from 'react';
import { styled } from '@linaria/react';

import { inputFocusStyles } from '../../styles/inputFocus';

const ToggleInputInput = styled.input`

  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const ToggleInputIndicator = styled.span`
  /* stylelint-disable no-descending-specificity */
  background: var(--color-input-background);
  border-color: var(--color-border);
  border-radius: 999px;
  border-style: solid;
  border-width: var(--border-width);
  cursor: pointer;
  display: block;
  height: calc(1em + 2 * var(--border-width));
  position: relative;
  user-select: none;
  width: calc(2em + 2 * var(--border-width));

  input:focus ~ & {
    ${inputFocusStyles}
  }

  input:focus ~ &::after,
  &:focus::after,
  &:hover::after {
    background: var(--color-focus);
  }

  &:active::after {
    background: var(--color-active);
  }

  &::after {
    background: var(--color-text);
    border-radius: 100%;
    content: '';
    display: block;
    height: 1em;
    width: 1em;
  }

  /* Checked */
  input:checked ~ &::after {
    transform: translateX(100%);
  }
`;

export type ToggleInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const ToggleInput: React.FC<ToggleInputProps> = ({
  className,
  style,
  ...rest
}) => (
  <>
    <ToggleInputInput type="checkbox" {...rest} />
    <ToggleInputIndicator className={className} style={style} />
  </>
);

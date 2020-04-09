import React from 'react';
import { styled } from 'linaria/react';

import { HStack } from '../layout/HStack';
import { VStack } from '../layout/VStack';
import { inputFocusStyles } from '../../styles/inputFocus';
import { DecrementIcon } from '../icon/DecrementIcon';
import { IncrementIcon } from '../icon/IncrementIcon';

const NumericInputWrapper = styled(HStack)`

  background: var(--color-input-background);
  border-color: var(--color-border);
  border-radius: var(--border-radius);
  border-style: solid;
  border-width: var(--border-width);
  color: var(--color-text);
  position: relative;
`;

const NumericInputInput = styled.input`

  -moz-appearance: textfield;
  background: transparent;
  border: none;
  color: inherit;
  font: inherit;
  width: 100%;
  padding: var(--spacing-100) 0 var(--spacing-100) var(--spacing-200);

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  &:focus {
    ${inputFocusStyles}
  }
`;

const NumericInputButton = styled.button`

  align-items: center;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: 50%;
  justify-content: center;
  margin: 0;
  padding: 0 0.25rem;
  text-align: center;

  & path {
    fill: var(--color-button-secondary-color);
  }

  &:focus {
    ${inputFocusStyles}
  }

  &:focus path,
  &:hover path {
    fill: var(--color-focus);
  }

  &:active path {
    color: var(--color-active);
  }
`;

const NumericInputButtonWrapper = styled(VStack)`

  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

export interface NumericInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'max' | 'min' | 'step' | 'value'
  > {
  max?: number;
  min?: number;
  onChange?: (value: number) => any;
  step?: number;
  value?: number;
}

export const NumericInput: React.FC<NumericInputProps> = ({
  max,
  min = 0,
  onChange,
  step = 1,
  value,
  ...rest
}) => (
  <NumericInputWrapper gap={0}>
    <NumericInputInput
      onChange={(event) => {
        if (onChange) {
          onChange(parseInt(event.currentTarget.value));
        }
      }}
      max={max}
      min={min}
      step={step}
      type="number"
      value={value}
      {...rest}
    />
    <NumericInputButtonWrapper gap={0}>
      <NumericInputButton
        aria-hidden="true"
        onClick={() => {
          if (onChange && typeof value === 'number') {
            const nextValue = value + step;

            if (typeof max !== 'number' || nextValue < max) {
              onChange(nextValue);
            }
          }
        }}
        tabIndex={-1}
        title="Increment"
        type="button"
      >
        <IncrementIcon />
      </NumericInputButton>
      <NumericInputButton
        aria-hidden="true"
        onClick={() => {
          if (onChange && typeof value === 'number') {
            const nextValue = value - step;

            if (typeof min !== 'number' || nextValue > min) {
              onChange(nextValue);
            }
          }
        }}
        tabIndex={-1}
        title="Decrement"
        type="button"
      >
        <DecrementIcon />
      </NumericInputButton>
    </NumericInputButtonWrapper>
  </NumericInputWrapper>
);

import React from 'react';
import { styled } from 'linaria/react';

const RadioFieldLabel = styled.label`

  display: block;
`;

const RadioFieldInput = styled.input`

  opacity: 0;
  position: absolute;
  z-index: -1;
`;

const RadioFieldIndicator = styled.span`

  background: var(--color-input-background);
  border-color: var(--color-border);
  border-radius: var(--border-radius);
  border-style: solid;
  border-width: var(--border-width);
  color: var(--color-text-light);
  cursor: pointer;
  display: block;
  padding: var(--spacing-100) var(--spacing-200);

  input:checked ~ & {
    color: var(--color-text);
  }
`;

export interface RadioFieldProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  label?: React.ReactNode;
}

export const RadioField: React.FC<RadioFieldProps> = ({
  inputProps,
  label,
  ...rest
}) => (
  <RadioFieldLabel {...rest}>
    <RadioFieldInput type="radio" {...inputProps} />
    <RadioFieldIndicator>{label}</RadioFieldIndicator>
  </RadioFieldLabel>
);

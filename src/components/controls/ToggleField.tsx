import React from 'react';
import { styled } from '@linaria/react';

import { HStack } from '../layout/HStack';
import { Label } from '../text/Label';
import { ToggleInput, ToggleInputProps } from './ToggleInput';

const ToggleFieldLabel = styled.label`

  display: block;
`;

export interface ToggleFieldProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  inputProps?: ToggleInputProps;
  label?: React.ReactNode;
}

export const ToggleField: React.FC<ToggleFieldProps> = ({
  inputProps,
  label,
  ...rest
}) => (
  <ToggleFieldLabel {...rest}>
    <HStack>
      <ToggleInput {...inputProps} />
      <Label htmlFor={inputProps?.id}>{label}</Label>
    </HStack>
  </ToggleFieldLabel>
);

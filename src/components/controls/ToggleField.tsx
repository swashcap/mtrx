import React from 'react';
import { styled } from 'linaria/react';

import { ToggleInput, ToggleInputProps } from './ToggleInput';
import { Text } from '../text/Text';
import { HStack } from '../layout/HStack';

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
      <Text>{label}</Text>
    </HStack>
  </ToggleFieldLabel>
);

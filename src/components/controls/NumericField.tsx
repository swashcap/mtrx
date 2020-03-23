import React from 'react';

import { Label } from '../text/Label';
import { NumericInput, NumericInputProps } from './NumericInput';
import { VStack, VStackProps } from '../layout/VStack';
import { uniqueId } from '../utils/uniqueId';

export interface NumericFieldProps extends VStackProps {
  inputProps?: NumericInputProps;
  label?: React.ReactNode;
}

export const NumericField: React.FC<NumericFieldProps> = ({
  inputProps,
  label,
  ...rest
}) => {
  const id = inputProps?.id ?? uniqueId('numeric-field-');

  return (
    <VStack gap={0} {...rest}>
      {!!label && <Label htmlFor={id}>{label}</Label>}
      <NumericInput {...inputProps} id={id} />
    </VStack>
  );
};

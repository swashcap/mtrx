import React from 'react';

import { SliderInput } from './SliderInput';
import { Label } from '../text/Label';
import { VStack, VStackProps } from '../layout/VStack';
import { HStack } from '../layout/HStack';
import { TextInput } from './TextInput';

export interface SliderFieldProps extends VStackProps {
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'max' | 'min' | 'onChange'
  > & {
    max?: number;
    min?: number;
    onChange?: (value: number) => any;
  };
  label?: React.ReactNode;
}

export const SliderField: React.FC<SliderFieldProps> = ({
  inputProps: input = {},
  label,
  ...rest
}) => {
  const { onChange, value, ...inputProps } = input;

  return (
    <VStack gap={0} {...rest}>
      {!!label && <Label>{label}</Label>}
      <HStack gap={2}>
        <SliderInput
          onChange={event => {
            if (onChange) {
              onChange(parseInt(event.currentTarget.value));
            }
          }}
          type="range"
          value={value}
          {...inputProps}
        />
        <TextInput
          onChange={event => {
            if (onChange) {
              onChange(parseInt(event.currentTarget.value));
            }
          }}
          style={{ width: 50 }}
          type="number"
          value={value}
        />
      </HStack>
    </VStack>
  );
};

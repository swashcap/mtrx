import React from 'react';
import { styled } from 'linaria/react';

import { Text } from '../text/Text';
import { VStack } from '../layout/VStack';
import { BoxProps } from '../layout/Box';

const Fieldset = styled.fieldset`
  border: none;
  /* TODO: figure out why passing box prop fails */
  margin: 0;
  padding: 0 var(--spacing-300);
`;

export interface InspectorFormSectionProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  box?: Required<BoxProps['box']>;
  heading?: React.ReactNode;
}

export const InspectorFormSection: React.FC<InspectorFormSectionProps> = ({
  box,
  children,
  heading,
  ...rest
}) => (
  <Fieldset {...rest}>
    <VStack box={box} gap={2}>
      {heading && (
        <Text as="legend" bold>
          {heading}
        </Text>
      )}
      {children}
    </VStack>
  </Fieldset>
);

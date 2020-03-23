import React from 'react';

import { Caption } from '../text/Caption';
import { HStack } from '../layout/HStack';

export interface ScreenDescriptorProps {
  name: React.ReactNode;
  size: React.ReactNode;
}

export const ScreenDescriptor: React.FC<ScreenDescriptorProps> = ({
  name,
  size,
}) => (
  <HStack align="end" box={{ pv: 1, pt: 1 }} gap={1}>
    <Caption>{name}</Caption>
    <Caption color="secondary">({size})</Caption>
  </HStack>
);

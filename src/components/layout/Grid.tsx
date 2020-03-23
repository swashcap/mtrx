import React from 'react';

import { Box, BoxProps } from './Box';
import { HStack, HStackProps } from './HStack';

export const Grid: React.FC<HStackProps> = ({ box, ...rest }) => (
  <HStack
    box={{
      ...box,
    }}
    gap={0}
    {...rest}
  />
);

export const GridColumn: React.FC<BoxProps> = ({ box, ...rest }) => (
  <Box
    box={{
      ...box,
      ph: 1,
    }}
    {...rest}
  />
);

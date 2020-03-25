import React from 'react';
import { styled } from 'linaria/react';

import { Box, BoxProps } from './Box';

const HR = styled.hr`

  border-color: var(--color-border);
  border-style: solid;
  border-width: 1px 0 0;
  margin: 0;
  width: 100%;
`;

export type DividerProps = Omit<BoxProps, 'children'>;

export const Divider: React.FC<DividerProps> = (props) => (
  <Box {...props}>
    <HR />
  </Box>
);

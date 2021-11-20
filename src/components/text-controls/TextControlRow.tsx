import React from 'react';
import { styled } from '@linaria/react';

import { Divider } from '../layout/Divider';
import { HStack } from '../layout/HStack';

const Root = styled.div`

  border-width: 0;
  display: block;
  margin: 0;
  padding: 0;
`;

const Stack = styled(HStack)`

  align-items: center;

  & > * {
    width: 33.33%;
  }
`;

export interface TextControlRowProps
  extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ReactType;
}

export const TextControlRow: React.FC<TextControlRowProps> = ({
  children,
  ...rest
}) => (
  <Root {...rest}>
    <Stack box={{ pv: 2 }} gap={2}>
      {children}
    </Stack>
    <Divider aria-hidden="true" />
  </Root>
);

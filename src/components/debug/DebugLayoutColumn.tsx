import React from 'react';
import { styled } from 'linaria/react';

import { Caption } from '../text/Caption';
import { VStack } from '../layout/VStack';

export interface DebugLayoutColumnProps
  extends React.HTMLAttributes<HTMLDivElement> {
  pad: number;
}

export const DebugLayoutColumnWrapper = styled.div<DebugLayoutColumnProps>`
  flex: 1;
  padding-right: ${props => props.pad}px;
  padding-left: ${props => props.pad}px;
`;

export const DebugLayoutColumn: React.FC<DebugLayoutColumnProps> = ({
  children,
  pad,
  ...rest
}) => (
  <DebugLayoutColumnWrapper pad={pad} {...rest}>
    <VStack
      align="center"
      style={{
        background: 'rgba(255, 0, 0, .15)',
        height: '100%',
      }}
    >
      <Caption
        style={{
          color: 'red',
          textAlign: 'center',
        }}
      >
        {children}
      </Caption>
    </VStack>
  </DebugLayoutColumnWrapper>
);

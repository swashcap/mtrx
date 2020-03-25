import React from 'react';
import { styled } from 'linaria/react';

import { ScreenViewportContent } from './ScreenViewportContent';
import { ScreenViewportDebug } from './ScreenViewportDebug';

const Sup = styled.div`

  background: white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  position: relative;
`;

export interface ScreenViewportProps
  extends React.HTMLAttributes<HTMLDivElement> {
  debug?: React.ReactNode;
}

export const ScreenViewport: React.FC<ScreenViewportProps> = ({
  children,
  debug,
  ...rest
}) => (
  <Sup {...rest}>
    <ScreenViewportContent>{children}</ScreenViewportContent>
    {debug && <ScreenViewportDebug>{debug}</ScreenViewportDebug>}
  </Sup>
);

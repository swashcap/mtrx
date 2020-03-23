import React from 'react';
import { styled } from 'linaria/react';

import { Abbr } from '../text/Abbr';
import { Box, BoxProps } from '../layout/Box';
import { Screen as ScreenType } from '../../state/screens';
import { ScreenDescriptor } from './ScreenDescriptor';
import { ScreenViewport } from './ScreenViewport';

const ScreenWrapper = styled(Box)<BoxProps & { width: number }>`
  width: ${props => props.width}px;
`;

export type ScreenProps = BoxProps & ScreenType;

export const Screen: React.FC<ScreenProps> = ({
  box,
  children,
  height,
  name,
  width,
  ...rest
}) => (
  <ScreenWrapper
    box={{
      mv: 2,
      ...box,
    }}
    width={width}
    {...rest}
  >
    <ScreenViewport children={children} style={{ height, width }} />
    <ScreenDescriptor
      name={name}
      size={
        <>
          {width} × {height}
          <Abbr title="pixels">px</Abbr>
        </>
      }
    />
  </ScreenWrapper>
);

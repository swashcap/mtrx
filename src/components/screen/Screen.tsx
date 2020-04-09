import React from 'react';
import { styled } from 'linaria/react';

import { Abbr } from '../text/Abbr';
import { Box, BoxProps } from '../layout/Box';
import { Screen as ScreenType } from '../../state/screens';
import { ScreenDescriptor } from './ScreenDescriptor';
import { ScreenViewport } from './ScreenViewport';

const ScreenWrapper = styled(Box)<BoxProps & { width: number }>`

  width: ${(props) => props.width}px;
`;

export type ScreenProps = BoxProps &
  ScreenType & {
    debug?: React.ReactNode;
  };

export const Screen: React.FC<ScreenProps> = ({
  box,
  children,
  debug,
  height,
  name,
  width,
  ...rest
}) => (
  <ScreenWrapper
    aria-label={`${name}, ${width} pixels by ${height} pixels`}
    box={{
      mv: 2,
      ...box,
    }}
    width={width}
    {...rest}
  >
    <ScreenViewport
      aria-hidden="true"
      children={children}
      debug={debug}
      style={{ height, width, }}
    />
    <ScreenDescriptor
      aria-hidden="true"
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

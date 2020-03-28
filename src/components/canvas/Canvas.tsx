import React from 'react';

import { BreakpointsState } from '../../state/breakpoints';
import { ContentBlock } from '../content/ContentBlock';
import { ContentText } from '../content/ContentText';
import { DebugGrid } from '../debug/DebugGrid';
import { DebugLayout } from '../debug/DebugLayout';
import { HStack, HStackProps } from '../layout/HStack';
import { Screen } from '../screen/Screen';
import { ScreensState } from '../../state/screens';
import { SettingsState } from '../../state/settings';
import { getBreakpointRetriever } from '../utils/getBreakpointRetriever';
import { styled } from 'linaria/react';

export interface CanvasProps extends HStackProps {
  breakpoints: BreakpointsState;
  screens: ScreensState;
  settings: SettingsState;
}

const CanvasWrapper = styled(HStack)`

  background: var(--color-background);
  color: var(--color-text);
`;

export const Canvas: React.FC<CanvasProps> = ({
  breakpoints,
  screens,
  settings: { content, showGrid, showLayout, gridSize },
  ...rest
}) => {
  const getBreakpoint = getBreakpointRetriever(breakpoints);

  return (
    <CanvasWrapper
      box={{
        ph: 3,
        pv: 2,
      }}
      gap={3}
      wrap
      {...rest}
    >
      {screens.map(({ height, name, width }) => {
        const breakpoint = getBreakpoint(width);
        const { columns, gutter, margin } = breakpoint.grid;
        const debug = [
          showGrid && <DebugGrid grid={gridSize} />,
          showLayout && (
            <DebugLayout
              columns={columns}
              gutter={gutter}
              margin={margin}
              width={width}
            />
          ),
        ];

        return (
          <Screen
            debug={debug}
            height={height}
            key={`${height}${width}`}
            name={name}
            width={width}
          >
            {content === 'block' && (
              <ContentBlock columns={columns} gutter={gutter} margin={margin} />
            )}
            {content === 'text' && (
              <ContentText gutter={gutter} margin={margin} />
            )}
          </Screen>
        );
      })}
    </CanvasWrapper>
  );
};

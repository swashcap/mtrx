import React from 'react';

import { BreakpointsState } from '../../state/breakpoints';
import { ContentBlock } from '../content/ContentBlock';
import { DebugGrid } from '../debug/DebugGrid';
import { DebugLayout } from '../debug/DebugLayout';
import { HStack, HStackProps } from '../layout/HStack';
import { Screen } from '../screen/Screen';
import { ScreensState } from '../../state/screens';
import { SettingsState } from '../../state/settings';
import { styled } from 'linaria/react';
import { ContentText } from '../content/ContentText';

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
}) => (
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
      const items = breakpoints.items
        .concat()
        .sort(({ width: a }, { width: b }) => {
          if (a > b) {
            return 1;
          } else if (a < b) {
            return -1;
          }

          return 0;
        })
        .reverse();
      const breakpoint = items.find(
        (breakpoint) => breakpoint.width.value < width
      ) ?? {
        grid: { columns: 0, gutter: 0, margin: 0 },
      };
      const { columns, gutter, margin } = breakpoint.grid;

      return (
        <Screen
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
          {showGrid && <DebugGrid grid={gridSize} />}
          {showLayout && (
            <DebugLayout
              columns={columns}
              gutter={gutter}
              margin={margin}
              width={width}
            />
          )}
        </Screen>
      );
    })}
  </CanvasWrapper>
);

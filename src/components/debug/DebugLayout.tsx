import React from 'react';

import { Breakpoint } from '../../state/breakpoints';
import { ContentContainer } from '../content/ContentContainer';
import { ContentGrid } from '../content/ContentGrid';
import { DebugLayoutColumn } from './DebugLayoutColumn';
import { HStack } from '../layout/HStack';
import { getColumnWidth } from '../utils/getColumnWidth';
import { styled } from 'linaria/react';

const DebugLayoutOuter = styled.div`

  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const DebugLayoutMiddle = styled(ContentContainer)`

  height: 100%;
`;

const DebugLayoutInner = styled(ContentGrid)`

  height: 100%;
`;

export type DebugLayoutProps = React.HTMLAttributes<HTMLDivElement> &
  Pick<Breakpoint['grid'], 'columns' | 'gutter' | 'margin'> & {
    width: number;
  };

export const DebugLayout: React.FC<DebugLayoutProps> = ({
  columns,
  gutter,
  margin,
  style,
  width,
  ...rest
}) => {
  const pad = gutter / 2;
  const columnWidth = getColumnWidth(width, {
    columns,
    gutter,
    margin,
  });

  return (
    <DebugLayoutOuter {...rest}>
      <DebugLayoutMiddle margin={margin}>
        <DebugLayoutInner gutter={gutter}>
          {Array.from(new Array(columns)).map((_, i) => (
            <DebugLayoutColumn key={i} pad={pad}>
              {columnWidth}
            </DebugLayoutColumn>
          ))}
        </DebugLayoutInner>
      </DebugLayoutMiddle>
    </DebugLayoutOuter>
  );
};

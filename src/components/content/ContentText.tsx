import React from 'react';

import { ContentContainer } from './ContentContainer';
import { ContentGrid } from './ContentGrid';
import { ContentGridColumn } from './ContentGridColumn';
import { ContentTextItem } from './ContentTextItem';
import { BreakpointText } from '../../state/breakpoints';

export interface ContentTextProps extends React.HTMLAttributes<HTMLDivElement> {
  margin: number;
  gutter: number;
  text: BreakpointText;
}

export const ContentText: React.FC<ContentTextProps> = ({
  margin,
  gutter,
  text,
  ...rest
}) => (
  <ContentContainer margin={margin} {...rest}>
    <ContentGrid gutter={gutter}>
      <ContentGridColumn
        columns={12}
        gutter={gutter}
        style={{ height: gutter, }}
      />
      <ContentGridColumn columns={12} gutter={gutter}>
        {text.map(([name, { fontSize, lineHeight }]) => {
          let children = 'Lorem ipsum dolor sit';
          let asProp: React.ReactType = name;

          if (name === 'body') {
            asProp = 'p';
            children =
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
          } else if (name === 'caption') {
            asProp = 'span';
            children =
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
          }

          return (
            <ContentTextItem
              as={asProp}
              children="Lorem ipsum dolor sit"
              style={{
                fontSize,
                lineHeight: `${lineHeight}px`,
              }}
            />
          );
        })}
      </ContentGridColumn>
    </ContentGrid>
  </ContentContainer>
);

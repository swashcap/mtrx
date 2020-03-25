import React from 'react';

import { ContentContainer } from './ContentContainer';
import { ContentGrid } from './ContentGrid';
import { ContentGridColumn } from './ContentGridColumn';
import { ContentTextParagraph } from './ContentTextParagraph';
import { ContentTextHeading } from './ContentTextHeading';

export interface ContentTextProps extends React.HTMLAttributes<HTMLDivElement> {
  margin: number;
  gutter: number;
}

export const ContentText: React.FC<ContentTextProps> = ({
  margin,
  gutter,
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
        <ContentTextHeading>Lorem ipsum</ContentTextHeading>
        <ContentTextHeading as="h2">Dolor sit amet</ContentTextHeading>
        <ContentTextHeading as="h3">
          Consectetur adipiscing elit, sed do
        </ContentTextHeading>
        <ContentTextHeading as="h4">
          Eiusmod tempor incididunt ut labore et dolore
        </ContentTextHeading>
        <ContentTextHeading as="h5">
          Magna aliqua ut enim ad minim veniam
        </ContentTextHeading>
        <ContentTextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContentTextParagraph>
      </ContentGridColumn>
    </ContentGrid>
  </ContentContainer>
);

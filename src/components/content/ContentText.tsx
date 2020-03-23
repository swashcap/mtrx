import React from 'react';

import { ContentContainer } from './ContentContainer';
import { styled } from 'linaria/react';
import { ContentGridColumn } from './ContentGridColumn';
import { ContentGrid } from './ContentGrid';

const ContentTextParagraph = styled.p`

  color: black;
  font: 14px/20px sans-serif;
  margin: 0;
`;

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

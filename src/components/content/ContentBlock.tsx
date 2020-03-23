import React, { Fragment } from 'react';

import { Breakpoint } from '../../state/breakpoints';
import { ContentBlockSquare } from './ContentBlockSquare';
import { ContentContainer } from './ContentContainer';
import { ContentGrid } from './ContentGrid';
import { ContentBlockHalf } from './ContentBlockHalf';
import { ContentGridColumn } from './ContentGridColumn';
import { ContentBlockVary } from './ContentBlockVary';

export type ContentBlockProps = Breakpoint['grid'];

export const ContentBlock: React.FC<ContentBlockProps> = ({
  columns,
  gutter,
  margin,
}) => (
  <ContentContainer margin={margin}>
    <ContentGrid gutter={gutter}>
      <ContentGridColumn
        columns={12}
        gutter={gutter}
        style={{ height: gutter }}
      />
      <ContentGridColumn columns={12} gutter={gutter}>
        <ContentBlockHalf />
      </ContentGridColumn>
      <ContentGridColumn
        columns={12}
        gutter={gutter}
        style={{ height: gutter }}
      />
      {Array.from(new Array(columns)).map((_, index) => (
        <ContentGridColumn key={index} columns={12 / columns} gutter={gutter}>
          <ContentBlockSquare />
        </ContentGridColumn>
      ))}
      <ContentGridColumn
        columns={12}
        gutter={gutter}
        style={{ height: gutter }}
      />
      {Array.from(new Array(columns)).map((_, index) => (
        <ContentGridColumn key={index} columns={12 / columns} gutter={gutter}>
          <ContentBlockSquare />
        </ContentGridColumn>
      ))}
      <ContentGridColumn
        columns={12}
        gutter={gutter}
        style={{ height: gutter }}
      />
      {Array.from(new Array(columns - 1)).map((_, index) => (
        <Fragment key={index}>
          <ContentGridColumn
            columns={12 - (12 / columns) * (index + 1)}
            gutter={gutter}
          >
            <ContentBlockVary
              style={{
                height: gutter * 10,
              }}
            />
          </ContentGridColumn>
          <ContentGridColumn
            columns={(12 / columns) * (index + 1)}
            gutter={gutter}
          >
            <ContentBlockVary
              style={{
                height: gutter * 10,
              }}
            />
          </ContentGridColumn>
          <ContentGridColumn
            columns={12}
            gutter={gutter}
            style={{ height: gutter }}
          />
        </Fragment>
      ))}
    </ContentGrid>
  </ContentContainer>
);

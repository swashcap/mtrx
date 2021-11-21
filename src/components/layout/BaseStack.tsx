import React, { Fragment } from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';

import { Box, BoxProps } from './Box';
import { SpacingUnit } from '../../types';

const StyledBaseStack = styled(Box)`

  display: flex;

  &.align-center {
    justify-content: center;
  }

  &.align-between {
    justify-content: space-between;
  }

  &.align-end {
    justify-content: flex-end;
  }

  &.column {
    flex-direction: column;
  }

  &.wrap {
    flex-wrap: wrap;
  }
`;

export interface BaseStackProps extends BoxProps {
  align?: 'start' | 'center' | 'end' | 'between';
  direction: 'column' | 'row';
  gap: SpacingUnit;
  wrap: boolean;
}

export const BaseStack: React.FC<BaseStackProps> = ({
  align,
  children,
  className,
  direction,
  gap,
  wrap,
  ...rest
}) => {
  const length = React.Children.count(children);
  const box: BoxProps['box'] = {};

  if (direction === 'column') {
    box.h = gap;
  } else {
    box.w = gap;
  }

  return (
    <StyledBaseStack
      className={cx(
        align === 'center' && 'align-center',
        align === 'end' && 'align-end',
        align === 'between' && 'align-between',
        direction === 'column' && 'column',
        wrap && 'wrap',
        className
      )}
      {...rest}
    >
      {gap > 0 && length > 1
        ? React.Children.map(children, (child, index) => (
            <Fragment key={index}>
              {child}
              {index < length - 1 && <Box box={box} />}
            </Fragment>
          ))
        : children}
    </StyledBaseStack>
  );
};

import React from 'react';

import { BaseStack, BaseStackProps } from './BaseStack';
import { BoxProps } from './Box';

export type HStackProps = BoxProps &
  Partial<Pick<BaseStackProps, 'align' | 'gap' | 'wrap'>>;

export const HStack: React.FC<HStackProps> = ({
  gap = 1,
  wrap = false,
  ...rest
}) => <BaseStack direction="row" gap={gap} wrap={wrap} {...rest} />;

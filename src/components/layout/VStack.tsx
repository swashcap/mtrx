import React from 'react';

import { BaseStack, BaseStackProps } from './BaseStack';
import { BoxProps } from './Box';

export type VStackProps = BoxProps &
  Partial<Pick<BaseStackProps, 'align' | 'gap' | 'wrap'>>;

export const VStack: React.FC<VStackProps> = ({
  gap = 1,
  wrap = false,
  ...rest
}) => <BaseStack direction="column" gap={gap} wrap={wrap} {...rest} />;

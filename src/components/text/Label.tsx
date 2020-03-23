import React from 'react';

import { Text, TextProps } from './Text';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  Pick<TextProps, 'bold' | 'color'>;

export const Label: React.FC<LabelProps> = props => (
  <Text as="label" {...props} />
);

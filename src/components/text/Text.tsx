import React from 'react';
import { styled } from 'linaria/react';

import { TextColor } from '../../types';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  bold?: boolean;
  color?: TextColor;
}

export const Text = styled.span<TextProps>`

  color:
    ${({ color }) =>
    color === 'secondary' ? 'var(--color-text-light)' : 'inherit'};
  display: inline-block;
  font-size: var(--font-regular-size);
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  line-height: var(--font-regular-line-height);
`;

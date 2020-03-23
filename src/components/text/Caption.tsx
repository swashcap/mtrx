import React from 'react';
import { styled } from 'linaria/react';

import { TextColor } from '../../types';

export interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  bold?: boolean;
  color?: TextColor;
}

export const Caption = styled.span<CaptionProps>`
  color: ${({ color }) =>
    color === 'secondary' ? 'var(--color-text-light)' : 'inherit'};
  font-size: var(--font-small-size);
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  line-height: var(--font-small-line-height);
`;

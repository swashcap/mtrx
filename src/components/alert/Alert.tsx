import React from 'react';
import { styled } from '@linaria/react';

export const AlertWrapper = styled.div`

  border-color: var(--color-alert);
  border-radius: var(--border-radius);
  border-style: solid;
  border-width: var(--border-width);
  padding: var(--spacing-300);
  text-align: center;
`;

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Alert: React.FC<AlertProps> = (props) => (
  <AlertWrapper role="alert" {...props} />
);

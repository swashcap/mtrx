import React from 'react';

export type SpacingUnit = 0 | 1 | 2 | 3 | 4;

export type StyledComponentProps<T> = T extends React.StatelessComponent<
  infer U
>
  ? U
  : never;

export type TextColor = 'primary' | 'secondary';

import { styled } from 'linaria/react';

import { Button, ButtonProps } from './Button';

export type IconButtonProps = ButtonProps;

export const IconButton = styled(Button)`

  line-height: 1;

  &.primary path {
    fill: var(--color-button-primary-color);
  }

  &.secondary path {
    fill: var(--color-button-secondary-color);
  }

  &:focus path,
  &:hover path {
    fill: var(--color-focus);
  }

  &:active {
    color: var(--color-active);
  }
`;

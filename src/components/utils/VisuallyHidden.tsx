import React from 'react';
import { css, cx } from 'linaria';

export interface VisuallyHiddenProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  focusable?: boolean;
}

/**
 * Hide content visually, but remain accessible for screen readers.
 *
 * {@link https://github.com/h5bp/html5-boilerplate/blob/ffd36de013ff00e2623c6ea35675b1c4763a4524/dist/css/main.css#L113-L150}
 */
const style = css`

  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &.focusable:active,
  &.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: inherit;
    width: auto;
  }
`;

export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  className,
  focusable,
  ...rest
}) => (
  <span className={cx(style, focusable && 'focusable', className)} {...rest} />
);

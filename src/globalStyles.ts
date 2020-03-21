import { css } from 'linaria';

/**
 * Add global styles.
 * {@link https://github.com/callstack/linaria/blob/master/docs/BASICS.md#adding-global-styles}
 */
export const globalStyles = css`
  :global() {
    *,
    *:after,
    *:before {
      box-sizing: border-box;
    }

    html {
      font-family: 'Inconsolata', Consolas, monospace;
      font-size: 112.5%;
      line-height: 1.25;
    }
  }
`;

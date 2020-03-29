import { styled } from 'linaria/react';

import { inputFocusStyles } from '../../styles/inputFocus';

/**
 * Skip link for screen readers.
 * {@link https://web.dev/headings-and-landmarks/#use-landmarks-to-aid-navigation}
 */
export const SkipLink = styled.a`

  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-background);
  color: var(--color-text);
  padding: var(--spacing-200);
  z-index: 100;

  &:focus {
    ${inputFocusStyles}

    top: 0;
  }
`;

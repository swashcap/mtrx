import React from 'react';

import { Caption } from '../text/Caption';
import { Link } from '../controls/Link';
import { Text } from '../text/Text';
import { VStack } from '../layout/VStack';
import { HStack, HStackProps } from '../layout/HStack';
import { Button } from '../controls/Button';
import { reset } from '../../state/reset';

export type InspectorInfoProps = HStackProps;

export const InspectorInfo: React.FC<InspectorInfoProps> = ({
  box,
  ...rest
}) => (
  <HStack box={{ pb: 1, ph: 3, ...box }} gap={0} role="contentinfo" {...rest}>
    <VStack gap={0}>
      <svg width="60px" height="14px" viewBox="0 0 60 14">
        <g
          id="Logo"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M48,2 L58,12 M58,2 L48,12"
            id="X"
            stroke="#ffffff"
            stroke-width="2"
          ></path>
          <polyline
            id="R"
            stroke="#ffffff"
            stroke-width="2"
            points="37 12 37 2 41.9884684 2 44.9496421 4.96117376"
          ></polyline>
          <polyline
            id="T"
            stroke="#ffffff"
            stroke-width="2"
            points="32.8033728 12 32.8033728 2 26 2"
          ></polyline>
          <polyline
            id="M"
            stroke="#ffffff"
            stroke-width="2"
            points="2 12 11.950696 2.09812417 11.950696 12 22 2 22 12"
          ></polyline>
        </g>
      </svg>
      <Caption>
        <Link
          href="https://github.com/swashcap/mtrx"
          title="Source code on GitHub"
        >
          Source Code
        </Link>
      </Caption>
    </VStack>
    <div style={{ flex: 2, }} />
    <Button onClick={reset} title="Reset state">
      Reset
    </Button>
  </HStack>
);

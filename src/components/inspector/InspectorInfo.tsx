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
      <Text>mtrx</Text>
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

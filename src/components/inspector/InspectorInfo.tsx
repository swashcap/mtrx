import React from 'react';
import { styled } from 'linaria/react';

import { Caption } from '../text/Caption';
import { Link } from '../controls/Link';
import { Text } from '../text/Text';
import { VStack, VStackProps } from '../layout/VStack';

const InspectorInfoWrapper = styled(VStack)`

  text-align: center;
`;

export type InspectorInfoProps = VStackProps;

export const InspectorInfo: React.FC<InspectorInfoProps> = ({
  box,
  ...rest
}) => (
  <InspectorInfoWrapper
    box={{ pb: 1, ph: 3, ...box }}
    gap={0}
    role="contentinfo"
    {...rest}
  >
    <Text>mtrx</Text>
    <Caption>
      <Link href="https://github.com/swashcap/mtrx">Source code on GitHub</Link>
    </Caption>
  </InspectorInfoWrapper>
);

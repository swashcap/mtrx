import React from 'react';
import { styled } from 'linaria/react';

import { Text } from '../text/Text';
import { Button, ButtonProps } from '../controls/Button';
import { VStack, VStackProps } from '../layout/VStack';
import { Box } from '../layout/Box';
import { HStack } from '../layout/HStack';
import { Divider } from '../layout/Divider';

const Root = styled(VStack)`

  background: var(--color-background);
  color: var(--color-text);
  max-width: 28em;
`;

const Header = styled(HStack)`

  align-items: center;
`;

export interface ModalBodyProps extends VStackProps {
  heading?: string;
  onClose?: ButtonProps['onClick'];
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  heading,
  onClose,
  ...rest
}) => (
  <Root
    aria-labelledby={heading ? 'modal-heading' : ''}
    gap={0}
    role="dialog"
    {...rest}
  >
    <Header align="between" box={{ ph: 3, pv: 1 }}>
      {heading && (
        <Text bold id="modal-heading">
          {heading}
        </Text>
      )}
      <Button aria-label="Close dialog" onClick={onClose} title="Close dialog">
        ✕
      </Button>
    </Header>
    <Divider />
    <Box box={{ ph: 3, pv: 1 }}>{children}</Box>
  </Root>
);

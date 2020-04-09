import React from 'react';
import { styled } from 'linaria/react';

import { Box } from '../layout/Box';
import { CloseIcon } from '../icon/CloseIcon';
import { Divider } from '../layout/Divider';
import { HStack } from '../layout/HStack';
import { IconButton, IconButtonProps } from '../controls/IconButton';
import { Text } from '../text/Text';
import { VStack, VStackProps } from '../layout/VStack';

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
  onClose?: IconButtonProps['onClick'];
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  heading,
  onClose,
  ...rest
}) => (
  <Root
    aria-modal="true"
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
      <IconButton
        aria-label="Close dialog"
        onClick={onClose}
        title="Close dialog"
      >
        <CloseIcon />
      </IconButton>
    </Header>
    <Divider />
    <Box box={{ ph: 3, pv: 1 }}>{children}</Box>
  </Root>
);

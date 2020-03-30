import React, { useEffect } from 'react';
import FocusTrap from 'focus-trap-react';

import { ModalBody } from './ModalBody';
import { ModalMask } from './ModalMask';
import { ModalContent } from './ModalContent';
import { useModal } from './ModalContext';

export interface ModalProps {
  children?: React.ReactNode;
  heading?: string;
  onClose?: () => any;
  visible?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  heading,
  onClose,
  visible,
}) => {
  const { setModal } = useModal();

  useEffect(() => {
    // Modals must be in the `App` tree to get CSS variables styling.
    setModal(
      visible ? (
        <FocusTrap>
          <div>
            <ModalMask />
            <ModalContent onClick={onClose}>
              <ModalBody
                heading={heading}
                onClick={(event) => {
                  event.stopPropagation();
                }}
                onClose={onClose}
              >
                {children}
              </ModalBody>
            </ModalContent>
          </div>
        </FocusTrap>
      ) : null
    );
  }, [visible]);

  return null;
};

import React, { createContext, useContext } from 'react';

export interface ModalControls {
  setModal(element: React.ReactElement | null): any;
}

export const ModalContext = createContext<ModalControls>(
  (null as unknown) as ModalControls
);

export const useModal = () => useContext(ModalContext);

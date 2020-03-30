import React, { createContext, useContext, useState } from 'react';

export const createModalControls = () => {
  const [modal, setModal] = useState<React.ReactElement | null>(null);

  return {
    modal,
    setModal,
  };
};

export const ModalContext = createContext<
  ReturnType<typeof createModalControls>
>((null as unknown) as ReturnType<typeof createModalControls>);

export const useModal = () => useContext(ModalContext);

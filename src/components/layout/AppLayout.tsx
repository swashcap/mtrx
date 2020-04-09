import React from 'react';
import { render } from 'react-dom';
import { styled } from 'linaria/react';

import { SkipLink } from '../utils/SkipLink';
import { ModalContext } from '../modal/ModalContext';

const AppLayoutWrapper = styled.div`

  display: flex;
  height: 100vh;
`;

const AppLayoutContent = styled.div`

  flex: 1;
  overflow-y: scroll;
`;

const AppLayoutSidebar = styled.div`

  height: 100vh;
  overflow-y: scroll;
  width: 15em;
`;

export interface AppLayoutProps {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

export class AppLayout extends React.PureComponent<AppLayoutProps> {
  private _queuedModal: React.ReactElement | null = null;
  private _modalRoot: HTMLDivElement | null = null;

  setModal = (element: React.ReactElement | null) => {
    if (this._modalRoot) {
      render(element === null ? <></> : element, this._modalRoot);
    } else {
      this._queuedModal = element;
    }
  };

  private _setModalRoot = (element: HTMLDivElement) => {
    this._modalRoot = element;

    if (this._queuedModal) {
      render(this._queuedModal, this._modalRoot);
      this._queuedModal = null;
    }
  };

  render() {
    const { content, sidebar } = this.props;

    return (
      <ModalContext.Provider
        value={{
          setModal: this.setModal,
        }}
      >
        <AppLayoutWrapper>
          <SkipLink href="#content">Skip to content</SkipLink>
          <SkipLink href="#controls">Skip to controls</SkipLink>
          <AppLayoutContent id="content">{content}</AppLayoutContent>
          <AppLayoutSidebar id="controls">{sidebar}</AppLayoutSidebar>
        </AppLayoutWrapper>
        <div key="modal-root" ref={this._setModalRoot} />
      </ModalContext.Provider>
    );
  }
}

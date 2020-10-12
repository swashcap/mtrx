import React from 'react';
import { render } from 'react-dom';
import { styled } from 'linaria/react';

import { SkipLink } from '../utils/SkipLink';
import { ModalContext } from '../modal/ModalContext';

const AppLayoutWrapper = styled.div`

  display: flex;
  height: 100vh;

  &[aria-hidden] {
    pointer-events: none;
    user-select: none;
  }
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
  private _layoutRef = React.createRef<HTMLDivElement>();
  private _queuedModal: React.ReactElement | null = null;
  private _modalRoot: HTMLDivElement | null = null;

  setModal = (element: React.ReactElement | null) => {
    if (this._modalRoot) {
      if (element) {
        render(element, this._modalRoot);
        this._layoutRef.current?.setAttribute('aria-hidden', 'true');
        this._layoutRef.current?.setAttribute('inert', 'true');
      } else {
        render(<></>, this._modalRoot);
        this._layoutRef.current?.removeAttribute('aria-hidden');
        this._layoutRef.current?.removeAttribute('inert');
      }
    } else {
      this._queuedModal = element;
    }
  };

  private _setModalRoot = (element: HTMLDivElement) => {
    this._modalRoot = element;

    if (this._queuedModal) {
      render(this._queuedModal, this._modalRoot);
      this._queuedModal = null;
      this._layoutRef.current?.setAttribute('aria-hidden', 'true');
      this._layoutRef.current?.setAttribute('inert', 'true');
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
        <AppLayoutWrapper ref={this._layoutRef}>
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

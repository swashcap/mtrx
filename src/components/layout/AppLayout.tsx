import React from 'react';
import { styled } from 'linaria/react';

import { SkipLink } from '../utils/SkipLink';

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

export const AppLayout: React.FC<AppLayoutProps> = ({ content, sidebar }) => (
  <AppLayoutWrapper>
    <SkipLink href="#content">Skip to content</SkipLink>
    <AppLayoutContent id="content">{content}</AppLayoutContent>
    <AppLayoutSidebar>{sidebar}</AppLayoutSidebar>
  </AppLayoutWrapper>
);

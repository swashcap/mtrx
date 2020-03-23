import React from 'react';
import { styled } from 'linaria/react';

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
  width: 240px;

  @media (min-width: 30em) {
    width: 300px;
  }
`;

export interface AppLayoutProps {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ content, sidebar }) => (
  <AppLayoutWrapper>
    <AppLayoutContent>{content}</AppLayoutContent>
    <AppLayoutSidebar>{sidebar}</AppLayoutSidebar>
  </AppLayoutWrapper>
);

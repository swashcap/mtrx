import React from 'react';
import { styled } from '@linaria/react';

import { BreakpointsState, Breakpoint } from '../../state/breakpoints';
import { Divider } from '../layout/Divider';
import { InspectorBreakpointControls } from './InspectorBreakpointControls';
import { InspectorContentControls } from './InspectorContentControls';
import { InspectorDebugControls } from './InspectorDebugControls';
import { InspectorInfo } from './InspectorInfo';
import { SettingsState } from '../../state/settings';
import { VStack, VStackProps } from '../layout/VStack';

export interface InspectorProps extends VStackProps {
  breakpoints: BreakpointsState;
  onBreakpointAdd: () => any;
  onBreakpointChange: (payload: {
    breakpoint: Breakpoint;
    index: number;
  }) => any;
  onBreakpointCollapseChange: (payload: {
    collapsed: boolean;
    index: number;
  }) => any;
  onBreakpointRemove: (payload: { index: number }) => any;
  onContentChange: (value: 'block' | 'text') => any;
  onGridSizeChange: (value: number) => any;
  onShowGridChange: (value: boolean) => any;
  onShowLayoutChange: (value: boolean) => any;
  settings: SettingsState;
}

const InspectorWrapper = styled(VStack)`

  background: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
  overflow-y: scroll;
`;

export const Inspector: React.FC<InspectorProps> = ({
  breakpoints,
  onBreakpointAdd,
  onBreakpointChange,
  onBreakpointCollapseChange,
  onBreakpointRemove,
  onContentChange,
  onGridSizeChange,
  onShowGridChange,
  onShowLayoutChange,
  settings,
  ...rest
}) => (
  <InspectorWrapper box={{ pv: 2 }} gap={2} {...rest}>
    <VStack gap={2}>
      <InspectorContentControls
        onContentChange={onContentChange}
        settings={settings}
      />
      <Divider />
      <InspectorBreakpointControls
        breakpoints={breakpoints}
        onBreakpointAdd={onBreakpointAdd}
        onBreakpointChange={onBreakpointChange}
        onBreakpointCollapseChange={onBreakpointCollapseChange}
        onBreakpointRemove={onBreakpointRemove}
      />
      <Divider />
      <InspectorDebugControls
        onGridSizeChange={onGridSizeChange}
        onShowGridChange={onShowGridChange}
        onShowLayoutChange={onShowLayoutChange}
        settings={settings}
      />
    </VStack>
    <div style={{ flex: 2, }} />
    <VStack gap={2}>
      <Divider aria-hidden="true" />
      <InspectorInfo />
    </VStack>
  </InspectorWrapper>
);

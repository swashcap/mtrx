import React, { Fragment } from 'react';

import { BreakpointsState, Breakpoint } from '../../state/breakpoints';
import { Divider } from '../layout/Divider';
import {
  InspectorFormSection,
  InspectorFormSectionProps,
} from './InspectorFormSection';
import { InspectorBreakpoint } from './InspectorBreakpoint';
import { Button } from '../controls/Button';

export interface InspectorBreakpointControlsProps
  extends InspectorFormSectionProps {
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
}

export const InspectorBreakpointControls: React.FC<InspectorBreakpointControlsProps> = ({
  breakpoints: { items, names },
  onBreakpointAdd,
  onBreakpointChange,
  onBreakpointCollapseChange,
  ...rest
}) => (
  <InspectorFormSection heading="Breakpoints" {...rest}>
    {items.map((breakpoint, index) => {
      const name = names[index];

      return (
        <Fragment key={name}>
          {index !== 0 && <Divider />}
          <InspectorBreakpoint
            breakpoint={breakpoint}
            name={name}
            onBreakpointChange={(breakpoint) =>
              onBreakpointChange({
                breakpoint,
                index,
              })
            }
            onBreakpointCollapseChange={(collapsed) =>
              onBreakpointCollapseChange({
                collapsed,
                index,
              })
            }
          />
        </Fragment>
      );
    })}
    <Divider />
    <Button onClick={onBreakpointAdd}>Add</Button>
  </InspectorFormSection>
);

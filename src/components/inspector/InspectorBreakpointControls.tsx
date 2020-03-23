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
  onBreakpointChange: (payload: { breakpoint: Breakpoint; key: string }) => any;
}

export const InspectorBreakpointControls: React.FC<InspectorBreakpointControlsProps> = ({
  breakpoints,
  onBreakpointChange,
  ...rest
}) => (
  <InspectorFormSection heading="Breakpoints" {...rest}>
    {Object.keys(breakpoints).map((key, index) => (
      <Fragment key={key}>
        {index !== 0 && <Divider />}
        <InspectorBreakpoint
          breakpoint={breakpoints[key]}
          name={key}
          onBreakpointChange={breakpoint =>
            onBreakpointChange({
              breakpoint,
              key,
            })
          }
        />
      </Fragment>
    ))}
    <Button>Add</Button>
  </InspectorFormSection>
);

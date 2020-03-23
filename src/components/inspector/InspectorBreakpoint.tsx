import React, { useState } from 'react';

import { Breakpoint } from '../../state/breakpoints';
import { Collapse } from '../utils/Collapse';
import { HStack } from '../layout/HStack';
import { NumericField } from '../controls/NumericField';
import { SliderField } from '../controls/SliderField';
import { VStack, VStackProps } from '../layout/VStack';

export interface InspectorBreakpointProps extends VStackProps {
  breakpoint: Breakpoint;
  onBreakpointChange: (breakpoint: Breakpoint) => any;
  name: string;
}

export const InspectorBreakpoint: React.FC<InspectorBreakpointProps> = ({
  breakpoint: { grid, width },
  name,
  onBreakpointChange,
  ...rest
}) => {
  const [gridCollapsed, setGridCollapsed] = useState(true);

  return (
    <Collapse
      collapsed={gridCollapsed}
      id={`collapse-breakpoint-${name}`}
      onChange={setGridCollapsed}
      name={name}
    >
      <VStack gap={2} {...rest}>
        <SliderField
          inputProps={{
            max: 1000,
            min: 0,
            onChange: value => onBreakpointChange({ grid, width: value }),
            value: width,
          }}
          label="Width"
        />
        <HStack gap={2} wrap>
          <NumericField
            label="Margin"
            inputProps={{
              onChange: margin =>
                onBreakpointChange({
                  grid: {
                    ...grid,
                    margin,
                  },
                  width,
                }),
              value: grid.margin,
            }}
            style={{
              flex: 1,
            }}
          />
          <NumericField
            label="Gutter"
            inputProps={{
              onChange: gutter =>
                onBreakpointChange({
                  grid: {
                    ...grid,
                    gutter,
                  },
                  width,
                }),
              value: grid.gutter,
            }}
            style={{
              flex: 1,
            }}
          />
          <NumericField
            label="Columns"
            inputProps={{
              onChange: columns =>
                onBreakpointChange({
                  grid: {
                    ...grid,
                    columns,
                  },
                  width,
                }),
              min: 1,
              max: 12,
              value: grid.columns,
            }}
            style={{
              flex: 1,
            }}
          />
        </HStack>
      </VStack>
    </Collapse>
  );
};

import React from 'react';

import { Breakpoint } from '../../state/breakpoints';
import { Button } from '../controls/Button';
import { Collapse } from '../utils/Collapse';
import { HStack } from '../layout/HStack';
import { NumericField } from '../controls/NumericField';
import { SliderField } from '../controls/SliderField';
import { VStack, VStackProps } from '../layout/VStack';

export interface InspectorBreakpointProps extends VStackProps {
  breakpoint: Breakpoint;
  hideWidth?: boolean;
  name: string;
  onBreakpointChange: (breakpoint: Breakpoint) => any;
  onBreakpointCollapseChange: (collapsed: boolean) => any;
  onBreakpointRemove?: () => any;
}

export const InspectorBreakpoint: React.FC<InspectorBreakpointProps> = ({
  breakpoint,
  breakpoint: {
    grid,
    ui: { collapsed },
    width,
  },
  hideWidth,
  name,
  onBreakpointChange,
  onBreakpointCollapseChange,
  onBreakpointRemove,
  ...rest
}) => {
  return (
    <Collapse
      collapsed={collapsed}
      id={`collapse-breakpoint-${name}`}
      onChange={() => onBreakpointCollapseChange(!collapsed)}
      name={name}
    >
      <VStack gap={2} {...rest}>
        {!hideWidth && (
          <SliderField
            inputProps={{
              ...width,
              onChange: (value) =>
                onBreakpointChange({
                  ...breakpoint,
                  width: {
                    ...width,
                    value,
                  },
                }),
            }}
            label="Width"
          />
        )}
        <HStack gap={2} wrap>
          <NumericField
            label="Margin"
            inputProps={{
              min: 0,
              onChange: (margin) =>
                onBreakpointChange({
                  ...breakpoint,
                  grid: {
                    ...grid,
                    margin,
                  },
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
              min: 0,
              onChange: (gutter) =>
                onBreakpointChange({
                  ...breakpoint,
                  grid: {
                    ...grid,
                    gutter,
                  },
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
              onChange: (columns) =>
                onBreakpointChange({
                  ...breakpoint,
                  grid: {
                    ...grid,
                    columns,
                  },
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
        {!!onBreakpointRemove && (
          <Button
            aria-label="Remove breakpoint"
            onClick={onBreakpointRemove}
            style={{ textAlign: 'right', }}
          >
            ✕
          </Button>
        )}
      </VStack>
    </Collapse>
  );
};

import React from 'react';

import {
  InspectorFormSection,
  InspectorFormSectionProps,
} from './InspectorFormSection';
import { SettingsState } from '../../state/settings';
import { ToggleField } from '../controls/ToggleField';
import { HStack } from '../layout/HStack';
import { VStack } from '../layout/VStack';
import { NumericField } from '../controls/NumericField';

export interface InspectorDebugControlsProps extends InspectorFormSectionProps {
  onGridSizeChange: (value: number) => any;
  onShowGridChange: (value: boolean) => any;
  onShowLayoutChange: (value: boolean) => any;
  settings: SettingsState;
}

export const InspectorDebugControls: React.FC<InspectorDebugControlsProps> = ({
  onGridSizeChange,
  onShowGridChange,
  onShowLayoutChange,
  settings: { gridSize, showLayout, showGrid },
  ...rest
}) => (
  <InspectorFormSection heading="Debug" {...rest}>
    <HStack gap={2}>
      <VStack gap={2} style={{ flex: 1 }}>
        <ToggleField
          inputProps={{
            checked: showGrid,
            name: 'showGrid',
            onChange: event => {
              onShowGridChange(event.target.checked);
            },
            value: '1',
          }}
          label="Grid"
        />
        <ToggleField
          inputProps={{
            checked: showLayout,
            name: 'showLayout',
            onChange: event => {
              onShowLayoutChange(event.target.checked);
            },
            value: '1',
          }}
          label="Layout"
        />
      </VStack>
      <NumericField
        label="Grid size"
        inputProps={{ onChange: onGridSizeChange, value: gridSize }}
        style={{ flex: 1 }}
      />
    </HStack>
  </InspectorFormSection>
);

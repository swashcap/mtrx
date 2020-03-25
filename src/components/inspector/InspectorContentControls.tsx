import React from 'react';

import { HStack } from '../layout/HStack';
import {
  InspectorFormSection,
  InspectorFormSectionProps,
} from './InspectorFormSection';
import { RadioField } from '../controls/RadioField';
import { SettingsState } from '../../state/settings';

export type InspectorContentControlsProps = InspectorFormSectionProps & {
  onContentChange: (value: SettingsState['content']) => any;
  settings: SettingsState;
};

export const InspectorContentControls: React.FC<InspectorContentControlsProps> = ({
  onContentChange,
  settings: { content },
  ...rest
}) => (
  <InspectorFormSection heading="Content" {...rest}>
    <HStack gap={2}>
      <RadioField
        inputProps={{
          checked: content === 'block',
          onChange: (event) => {
            if (event.currentTarget.checked) {
              onContentChange('block');
            }
          },
          name: 'content',
          value: 'block',
        }}
        label="Grid"
      />
      <RadioField
        inputProps={{
          checked: content === 'text',
          onChange: (event) => {
            if (event.currentTarget.checked) {
              onContentChange('text');
            }
          },
          name: 'content',
          value: 'text',
        }}
        label="Text"
      />
    </HStack>
  </InspectorFormSection>
);

import React from 'react';

import { TextControlField } from './TextControlField';
import { Button } from '../controls/Button';
import { HStack } from '../layout/HStack';
import { VStack } from '../layout/VStack';
import { TextControlRow } from './TextControlRow';
import {
  BreakpointText,
  BreakpointTextSetting,
  BreakpointTextName,
} from '../../state/breakpoints';

export interface TextControlFormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  onTextSettingChange: (
    name: BreakpointTextName,
    setting: BreakpointTextSetting
  ) => any;
  text: BreakpointText;
}

export const TextControlForm: React.FC<TextControlFormProps> = ({
  onTextSettingChange,
  text,
  ...rest
}) => (
  <form {...rest}>
    <VStack gap={0}>
      <TextControlRow>
        <div />
        <div>Font size</div>
        <div>Line height</div>
      </TextControlRow>
      {text.map(([name, { fontSize, lineHeight }], index) => (
        <TextControlField
          fontSize={fontSize}
          index={index}
          key={name}
          lineHeight={lineHeight}
          name={name}
          onChange={(setting) => onTextSettingChange(name, setting)}
        />
      ))}
      <HStack align="end" box={{ pt: 2 }} gap={2}>
        <Button type="reset" variant="secondary">
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </HStack>
    </VStack>
  </form>
);

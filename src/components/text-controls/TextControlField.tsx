import React from 'react';

import { Label } from '../text/Label';
import { NumericInput } from '../controls/NumericInput';
import { Text } from '../text/Text';
import { VisuallyHidden } from '../utils/VisuallyHidden';
import { TextControlRow } from './TextControlRow';
import { BreakpointTextSetting } from '../../state/breakpoints';

export interface TextControlFieldProps {
  fontSize: number;
  index: number;
  onChange: (values: BreakpointTextSetting) => any;
  lineHeight: number;
  name: string;
}

export const TextControlField: React.FC<TextControlFieldProps> = ({
  fontSize,
  index,
  lineHeight,
  name,
  onChange,
}) => (
  <TextControlRow as="fieldset">
    <Text as="legend" style={{ display: 'block', }}>
      {name}
    </Text>
    <div>
      <VisuallyHidden>
        <Label htmlFor={`fontSize${index}`}>Font size</Label>
      </VisuallyHidden>
      <NumericInput
        id={`fontSize${index}`}
        min={0}
        name="fontSize[]"
        onChange={(value) =>
          onChange({
            fontSize: value,
            lineHeight,
          })
        }
        value={fontSize}
      />
    </div>
    <div>
      <VisuallyHidden>
        <Label htmlFor={`lineHeight${index}`}>Line height</Label>
      </VisuallyHidden>
      <NumericInput
        id={`lineHeight${index}`}
        min={0}
        name="lineHeight[]"
        onChange={(value) =>
          onChange({
            fontSize,
            lineHeight: value,
          })
        }
        value={lineHeight}
      />
    </div>
  </TextControlRow>
);

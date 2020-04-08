import React, { useState } from 'react';

import { Breakpoint } from '../../state/breakpoints';
import { Button } from '../controls/Button';
import { CloseIcon } from '../icon/CloseIcon';
import { Collapse } from '../utils/Collapse';
import { HStack } from '../layout/HStack';
import { IconButton } from '../controls/IconButton';
import { Modal } from '../modal/Modal';
import { NumericField } from '../controls/NumericField';
import { SliderField } from '../controls/SliderField';
import { TextControlForm } from '../text-controls/TextControlForm';
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
    text,
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
  const [showModal, setShowModal] = useState(false);
  const [initialBreakpointText] = useState(text);

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
        <HStack align="between" gap={0}>
          <Button aria-label="Text size" onClick={() => setShowModal(true)}>
            Text sizes
          </Button>
          {!!onBreakpointRemove && (
            <IconButton
              aria-label="Remove breakpoint"
              onClick={onBreakpointRemove}
            >
              <CloseIcon />
            </IconButton>
          )}
        </HStack>
      </VStack>

      {/* Text control form in a modal */}
      <Modal
        heading="Text sizes"
        onClose={() => setShowModal(false)}
        visible={showModal}
      >
        <TextControlForm
          text={text}
          onReset={(event) => {
            event.preventDefault();
            setShowModal(false);
            onBreakpointChange({
              ...breakpoint,
              text: initialBreakpointText,
            });
          }}
          onSubmit={(event) => {
            event.preventDefault();
            setShowModal(false);
          }}
          onTextSettingChange={(name, setting) => {
            onBreakpointChange({
              ...breakpoint,
              text: breakpoint.text.map(([textName, textSetting]) => [
                textName,
                name === textName ? setting : textSetting,
              ]),
            });
          }}
        />
      </Modal>
    </Collapse>
  );
};

import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';

import { DownIcon } from '../icon/DownIcon';
import { HStack } from '../layout/HStack';
import { UpIcon } from '../icon/UpIcon';
import { inputFocusStyles } from '../../styles/inputFocus';

export const CollapseButton = styled.button`

  background: transparent;
  border: none;
  color: var(--color-text-light);
  cursor: pointer;
  display: block;
  font: inherit;
  margin: 0;
  padding: var(--spacing-100) 0;
  position: relative;
  text-align: left;
  width: 100%;

  &:focus {
    ${inputFocusStyles}
  }

  & path {
    fill: var(--color-button-secondary-color);
  }

  &:focus path,
  &:hover path {
    fill: var(--color-focus);
  }

  &:active path {
    color: var(--color-active);
  }
`;

export type CollapseProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> & {
  collapsed?: boolean;
  name?: React.ReactNode;
  id: string;
  onChange?: (collapsed: boolean) => any;
};

export const Collapse: React.FC<CollapseProps> = ({
  children,
  collapsed,
  id,
  name,
  onChange,
  ...rest
}) => (
  <div {...rest}>
    <CollapseButton
      aria-expanded={collapsed ? 'false' : 'true'}
      aria-controls={id}
      className={cx(collapsed && 'collapsed')}
      type="button"
      onClick={() => {
        onChange && onChange(!collapsed);
      }}
    >
      <HStack align="between" gap={0}>
        <span>{name}</span>
        {collapsed ? (
          <UpIcon aria-hidden="true" />
        ) : (
          <DownIcon aria-hidden="true" />
        )}
      </HStack>
    </CollapseButton>
    <div id={id}>{!collapsed && children}</div>
  </div>
);

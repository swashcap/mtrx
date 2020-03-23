import React from 'react';
import { cx } from 'linaria';
import { styled } from 'linaria/react';

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

  &:after {
    content: '▾';
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0.5rem;
  }

  /* Collapsed */
  &.collapsed:after {
    content: '▸';
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
      aria-expanded={collapsed ? 'true' : 'false'}
      aria-controls={id}
      className={cx(collapsed && 'collapsed')}
      type="button"
      onClick={() => {
        onChange && onChange(!collapsed);
      }}
    >
      {name}
    </CollapseButton>
    <div id={id}>{!collapsed && children}</div>
  </div>
);

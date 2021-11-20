import React from 'react';
import { cx } from '@linaria/core';
import { styled } from '@linaria/react';

import { SpacingUnit } from '../../types';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ReactType;
  box?: {
    /** Height */
    h?: SpacingUnit;
    /** Margin: all */
    ma?: SpacingUnit;
    /** Margin: bottom */
    mb?: SpacingUnit;
    /** Margin: horizontal */
    mh?: SpacingUnit;
    /** Margin: left */
    ml?: SpacingUnit;
    /** Margin: right */
    mr?: SpacingUnit;
    /** Margin: top */
    mt?: SpacingUnit;
    /** Margin: vertical */
    mv?: SpacingUnit;
    /** Padding: all */
    pa?: SpacingUnit;
    /** Padding: bottom */
    pb?: SpacingUnit;
    /** Padding: horizontal */
    ph?: SpacingUnit;
    /** Padding: left */
    pl?: SpacingUnit;
    /** Padding: right */
    pr?: SpacingUnit;
    /** Padding: top */
    pt?: SpacingUnit;
    /** Padding: vertical */
    pv?: SpacingUnit;
    /** Width */
    w?: SpacingUnit;
  };
}

const BaseBox = styled.div`
  /* Height */
  &.h1 {
    height: var(--spacing-100);
  }

  &.h2 {
    height: var(--spacing-200);
  }

  &.h3 {
    height: var(--spacing-300);
  }

  /* Margin */
  &.ma0 {
    margin: 0;
  }

  &.ma1 {
    margin: var(--spacing-100);
  }

  &.ma2 {
    margin: var(--spacing-200);
  }

  &.ma3 {
    margin: var(--spacing-300);
  }

  &.mv0 {
    margin-bottom: 0;
    margin-top: 0;
  }

  &.mv1 {
    margin-bottom: var(--spacing-100);
    margin-top: var(--spacing-100);
  }

  &.mv2 {
    margin-bottom: var(--spacing-200);
    margin-top: var(--spacing-200);
  }

  &.mv3 {
    margin-bottom: var(--spacing-300);
    margin-top: var(--spacing-300);
  }

  &.mh0 {
    margin-left: 0;
    margin-right: 0;
  }

  &.mh1 {
    margin-left: var(--spacing-100);
    margin-right: var(--spacing-100);
  }

  &.mh2 {
    margin-left: var(--spacing-200);
    margin-right: var(--spacing-200);
  }

  &.mh3 {
    margin-left: var(--spacing-300);
    margin-right: var(--spacing-300);
  }

  /* Padding */
  &.pa0 {
    padding: 0;
  }

  &.pa1 {
    padding: var(--spacing-100);
  }

  &.pa2 {
    padding: var(--spacing-200);
  }

  &.pa3 {
    padding: var(--spacing-300);
  }

  &.pv0 {
    padding-bottom: 0;
    padding-top: 0;
  }

  &.pv1 {
    padding-bottom: var(--spacing-100);
    padding-top: var(--spacing-100);
  }

  &.pv2 {
    padding-bottom: var(--spacing-200);
    padding-top: var(--spacing-200);
  }

  &.pv3 {
    padding-bottom: var(--spacing-300);
    padding-top: var(--spacing-300);
  }

  &.ph0 {
    padding-left: 0;
    padding-right: 0;
  }

  &.ph1 {
    padding-left: var(--spacing-100);
    padding-right: var(--spacing-100);
  }

  &.ph2 {
    padding-left: var(--spacing-200);
    padding-right: var(--spacing-200);
  }

  &.ph3 {
    padding-left: var(--spacing-300);
    padding-right: var(--spacing-300);
  }

  &.pb0 {
    padding-bottom: 0;
  }

  &.pb1 {
    padding-bottom: var(--spacing-100);
  }

  &.pb2 {
    padding-bottom: var(--spacing-200);
  }

  &.pb3 {
    padding-bottom: var(--spacing-300);
  }

  &.pt0 {
    padding-top: 0;
  }

  &.pt1 {
    padding-top: var(--spacing-100);
  }

  &.pt2 {
    padding-top: var(--spacing-200);
  }

  &.pt3 {
    padding-top: var(--spacing-300);
  }

  /* Width */
  &.w1 {
    width: var(--spacing-100);
  }

  &.w2 {
    width: var(--spacing-200);
  }

  &.w3 {
    width: var(--spacing-300);
  }
`;

/**
 * Box.
 *
 * The layout primitive for the system: apply dimensions, margin or padding.
 *
 * Linaria doesn't support conditionals in style functions, making the implementation
 * verbose.
 * {@link https://github.com/callstack/linaria/issues/409}
 */
export const Box: React.FC<BoxProps> = ({ box, className, ...rest }) => (
  <BaseBox
    className={cx(
      box?.h && `h${box.h}`,
      box?.ma && `ma${box.ma}`,
      box?.mh && `mh${box.mh}`,
      box?.mv && `mv${box.mv}`,
      box?.pa && `pa${box.pa}`,
      box?.pb && `pb${box.pb}`,
      box?.ph && `ph${box.ph}`,
      box?.pt && `pt${box.pt}`,
      box?.pv && `pv${box.pv}`,
      box?.w && `w${box.w}`,
      className
    )}
    {...rest}
  />
);

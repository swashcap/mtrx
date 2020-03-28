import { Breakpoint } from '../../state/breakpoints';

export const getColumnWidth = (
  screenWidth: number,
  { columns, gutter, margin }: Breakpoint['grid']
) => (screenWidth - margin * 2 - gutter * (columns - 1)) / columns;

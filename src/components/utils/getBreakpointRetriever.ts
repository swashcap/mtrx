import { BreakpointsState, Breakpoint } from '../../state/breakpoints';

/**
 * Sort `Breakpoint`s and return a fetcher.
 */
export const getBreakpointRetriever = (breakpoints: BreakpointsState) => {
  const map = breakpoints.items.reduce<Record<number, Breakpoint>>(
    (memo, breakpoint) => {
      memo[breakpoint.width.value] = breakpoint;
      return memo;
    },
    {}
  );
  const widths = (Object.keys(map)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    })
    .reverse() as unknown) as Array<keyof typeof map>;
  const defaultBreakpoint = map[widths[widths.length - 1]];

  return (width: number) => {
    const key = widths.find((w) => Number(w) <= width);

    return typeof key !== 'undefined' ? map[key] : defaultBreakpoint;
  };
};

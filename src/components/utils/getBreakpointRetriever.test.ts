import { BreakpointsState, Breakpoint } from '../../state/breakpoints';
import { getBreakpointRetriever } from './getBreakpointRetriever';

const mockBreakpoints: BreakpointsState = {
  items: [
    {
      grid: {
        columns: 4,
        gutter: 16,
        margin: 16,
      },
      text: [
        [
          'h1',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h2',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h3',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h4',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h5',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h6',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'body',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'caption',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
      ],
      ui: {
        collapsed: false,
      },
      width: {
        max: 100,
        min: 0,
        value: 0,
      },
    },
    {
      grid: {
        columns: 4,
        gutter: 16,
        margin: 16,
      },
      text: [
        [
          'h1',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h2',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h3',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h4',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h5',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'h6',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'body',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
        [
          'caption',
          {
            fontSize: 0,
            lineHeight: 0,
          },
        ],
      ],
      ui: {
        collapsed: false,
      },
      width: {
        max: 100,
        min: 0,
        value: 600,
      },
    },
  ],
  names: ['small', 'biggo'],
};

test('getBreakpoint', () => {
  const getBreakpoint = getBreakpointRetriever(mockBreakpoints);

  expect(getBreakpoint(0)).toBe(mockBreakpoints.items[0]);
  expect(getBreakpoint(599)).toBe(mockBreakpoints.items[0]);
  expect(getBreakpoint(600)).toBe(mockBreakpoints.items[1]);
  expect(getBreakpoint(900)).toBe(mockBreakpoints.items[1]);
});

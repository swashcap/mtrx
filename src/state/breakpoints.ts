import React, { useReducer } from 'react';

export interface Breakpoint {
  grid: {
    columns: number;
    /** Size in pixels */
    gutter: number;
    /** Size in pixels */
    margin: number;
  };
  width: number;
}

export type BreakpointsState = Record<string, Breakpoint>;

export const INITIAL_STATE: BreakpointsState = {
  'X-Small': {
    grid: {
      columns: 2,
      gutter: 16,
      margin: 16,
    },
    width: 0,
  },
  Small: {
    grid: {
      columns: 4,
      gutter: 16,
      margin: 20,
    },
    width: 360,
  },
  Medium: {
    grid: {
      columns: 6,
      gutter: 16,
      margin: 24,
    },
    width: 480,
  },
  Large: {
    grid: {
      columns: 6,
      gutter: 20,
      margin: 24,
    },
    width: 680,
  },
};

export type BreakpointsAction =
  | {
      payload: {
        breakpoint: Breakpoint;
        key: string;
      };
      type: 'BREAKPOINTS_SET';
    }
  | {
      payload: {
        key: string;
      };
      type: 'BREAKPOINTS_DELETE';
    };

const reducer: React.Reducer<BreakpointsState, BreakpointsAction> = (
  state,
  action
) => {
  if (action.type == 'BREAKPOINTS_SET') {
    return Object.keys(state).reduce<BreakpointsState>((newState, key) => {
      newState[key] =
        key === action.payload.key ? action.payload.breakpoint : state[key];

      return newState;
    }, {});
  } else if (action.type === 'BREAKPOINTS_DELETE') {
    return Object.keys(state).reduce<BreakpointsState>((newState, key) => {
      if (key !== action.payload.key) {
        newState[key] = state[key];
      }

      return newState;
    }, {});
  }

  return state;
};

export const useBreakpointsReducer = () => useReducer(reducer, INITIAL_STATE);

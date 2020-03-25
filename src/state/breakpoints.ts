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

const KEYS = [
  'X-Small',
  'Small',
  'Medium',
  'Large',
  'X-Large',
  'XX-Large',
  '3X-Large',
] as const;

export const INITIAL_STATE: BreakpointsState = {
  [KEYS[0]]: {
    grid: {
      columns: 2,
      gutter: 16,
      margin: 16,
    },
    width: 0,
  },
  [KEYS[1]]: {
    grid: {
      columns: 4,
      gutter: 16,
      margin: 20,
    },
    width: 360,
  },
  [KEYS[2]]: {
    grid: {
      columns: 6,
      gutter: 16,
      margin: 24,
    },
    width: 480,
  },
};

export type BreakpointsAction =
  | {
      payload: null;
      type: 'BREAKPOINTS_ADD';
    }
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

const LOCAL_STORAGE_KEY = 'breakpoints';

const reducer: React.Reducer<BreakpointsState, BreakpointsAction> = (
  state,
  action
) => {
  let nextState: BreakpointsState;

  if (action.type === 'BREAKPOINTS_ADD') {
    const stateKeysLength = Object.keys(state).length;

    if (stateKeysLength === Object.keys(KEYS).length) {
      return state;
    }

    const stateLastItem = state[KEYS[stateKeysLength - 1]];

    nextState = {
      ...state,
      [KEYS[stateKeysLength]]: {
        grid: {
          columns: stateLastItem.grid.columns,
          gutter: stateLastItem.grid.gutter,
          margin: stateLastItem.grid.margin,
        },
        width: stateLastItem.width,
      },
    };
  } else if (action.type == 'BREAKPOINTS_SET') {
    nextState = Object.keys(state).reduce<BreakpointsState>((newState, key) => {
      newState[key] =
        key === action.payload.key ? action.payload.breakpoint : state[key];

      return newState;
    }, {});
  } else if (action.type === 'BREAKPOINTS_DELETE') {
    nextState = Object.keys(state).reduce<BreakpointsState>((newState, key) => {
      if (key !== action.payload.key) {
        newState[key] = state[key];
      }

      return newState;
    }, {});
  } else {
    return state;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextState));

  return nextState;
};

export const useBreakpointsReducer = () =>
  useReducer(
    reducer,
    localStorage.getItem(LOCAL_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
      : INITIAL_STATE
  );

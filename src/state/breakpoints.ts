import React, { useReducer } from 'react';

export interface Breakpoint {
  grid: {
    columns: number;
    /** Size in pixels */
    gutter: number;
    /** Size in pixels */
    margin: number;
  };
  ui: {
    collapsed: boolean;
  };
  width: {
    max: number;
    min: number;
    value: number;
  };
}

export type BreakpointsState = {
  items: Breakpoint[];
  names: string[];
};
export const INITIAL_STATE: BreakpointsState = {
  items: [
    {
      grid: {
        columns: 2,
        gutter: 16,
        margin: 16,
      },
      ui: {
        collapsed: true,
      },
      width: {
        max: 1000,
        min: 0,
        value: 0,
      },
    },
    {
      grid: {
        columns: 4,
        gutter: 16,
        margin: 20,
      },
      ui: {
        collapsed: true,
      },
      width: {
        max: 1000,
        min: 0,
        value: 360,
      },
    },
  ],
  names: [
    'X-Small',
    'Small',
    'Medium',
    'Large',
    'X-Large',
    'XX-Large',
    '3X-Large',
  ],
};

export type BreakpointsAction =
  | {
      payload: null;
      type: 'BREAKPOINTS_ADD';
    }
  | {
      payload: {
        breakpoint: Breakpoint;
        index: number;
      };
      type: 'BREAKPOINTS_SET';
    }
  | {
      payload: {
        collapsed: boolean;
        index: number;
      };
      type: 'BREAKPOINTS_SET_COLLAPSED';
    }
  | {
      payload: {
        index: number;
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
    const lastBreakpoint = state.items[state.items.length - 1];

    nextState = {
      ...state,
      items: [
        ...state.items,
        {
          grid: {
            ...lastBreakpoint.grid,
          },
          ui: {
            collapsed: false,
          },
          width: {
            min: lastBreakpoint.width.value,
            max: 1000,
            value: lastBreakpoint.width.value,
          },
        },
      ],
    };
  } else if (action.type == 'BREAKPOINTS_SET') {
    nextState = {
      ...state,
      items: state.items.map((breakpoint, index) =>
        index === action.payload.index ? action.payload.breakpoint : breakpoint
      ),
    };
  } else if (action.type === 'BREAKPOINTS_SET_COLLAPSED') {
    nextState = {
      ...state,
      items: state.items.map((breakpoint, index) =>
        index === action.payload.index
          ? {
              ...breakpoint,
              ui: {
                ...breakpoint.ui,
                collapsed: action.payload.collapsed,
              },
            }
          : breakpoint
      ),
    };
  } else if (action.type === 'BREAKPOINTS_DELETE') {
    nextState = {
      ...state,
      items: state.items.filter((_, index) => index !== action.payload.index),
    };
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

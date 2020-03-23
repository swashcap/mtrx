import React, { useReducer } from 'react';

export interface SettingsState {
  readonly content: 'block' | 'text';
  readonly showLayout: boolean;
  readonly showGrid: boolean;
  readonly gridSize: number;
}

export type SettingsAction =
  | {
      payload: SettingsState['content'];
      type: 'SETTINGS_SET_CONTENT';
    }
  | {
      payload: number;
      type: 'SETTINGS_SET_GRID_SIZE';
    }
  | {
      payload: boolean;
      type: 'SETTINGS_SET_SHOW_GRID';
    }
  | {
      payload: boolean;
      type: 'SETTINGS_SET_SHOW_LAYOUT';
    };

export const INITIAL_STATE: SettingsState = {
  content: 'block',
  showLayout: false,
  showGrid: false,
  gridSize: 20,
} as const;

const reducer: React.Reducer<SettingsState, SettingsAction> = (
  state,
  action
) => {
  if (action.type === 'SETTINGS_SET_CONTENT') {
    return {
      ...state,
      content: action.payload,
    };
  } else if (action.type === 'SETTINGS_SET_GRID_SIZE') {
    return {
      ...state,
      gridSize: action.payload,
    };
  } else if (action.type === 'SETTINGS_SET_SHOW_GRID') {
    return {
      ...state,
      showGrid: action.payload,
    };
  } else if (action.type === 'SETTINGS_SET_SHOW_LAYOUT') {
    return {
      ...state,
      showLayout: action.payload,
    };
  }

  return state;
};

export const useSettingsReducer = () => {
  return useReducer(reducer, INITIAL_STATE);
};

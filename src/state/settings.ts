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

export const LOCAL_STORAGE_KEY = 'settings';

const reducer: React.Reducer<SettingsState, SettingsAction> = (
  state,
  action
) => {
  let nextState: SettingsState;

  if (action.type === 'SETTINGS_SET_CONTENT') {
    nextState = {
      ...state,
      content: action.payload,
    };
  } else if (action.type === 'SETTINGS_SET_GRID_SIZE') {
    nextState = {
      ...state,
      gridSize: action.payload,
    };
  } else if (action.type === 'SETTINGS_SET_SHOW_GRID') {
    nextState = {
      ...state,
      showGrid: action.payload,
    };
  } else if (action.type === 'SETTINGS_SET_SHOW_LAYOUT') {
    nextState = {
      ...state,
      showLayout: action.payload,
    };
  } else {
    return state;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextState));

  return nextState;
};

export const useSettingsReducer = () => {
  return useReducer(
    reducer,
    localStorage.getItem(LOCAL_STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
      : INITIAL_STATE
  );
};

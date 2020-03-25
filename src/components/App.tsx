import React from 'react';

import { AppLayout } from './layout/AppLayout';
import { Canvas } from './canvas/Canvas';
import { Inspector } from './inspector/Inspector';
import { ScreenDimensionsProvider } from './utils/ScreenDimensions';
import { dark } from '../themes/dark';
import { screens } from '../state/screens';
import { useBreakpointsReducer } from '../state/breakpoints';
import { useSettingsReducer } from '../state/settings';

export const App = () => {
  const [settings, settingsDispatch] = useSettingsReducer();
  const [breakpoints, breakpointsDispatch] = useBreakpointsReducer();

  return (
    <ScreenDimensionsProvider>
      <AppLayout
        content={
          <Canvas
            breakpoints={breakpoints}
            screens={screens}
            settings={settings}
            style={{
              flex: 2,
            }}
          />
        }
        sidebar={
          <Inspector
            breakpoints={breakpoints}
            onBreakpointAdd={() =>
              breakpointsDispatch({
                payload: null,
                type: 'BREAKPOINTS_ADD',
              })
            }
            onBreakpointChange={(payload) =>
              breakpointsDispatch({
                payload,
                type: 'BREAKPOINTS_SET',
              })
            }
            onBreakpointCollapseChange={(payload) =>
              breakpointsDispatch({
                payload,
                type: 'BREAKPOINTS_SET_COLLAPSED',
              })
            }
            onBreakpointRemove={(payload) => {
              breakpointsDispatch({
                payload,
                type: 'BREAKPOINTS_DELETE',
              });
            }}
            onContentChange={(payload) =>
              settingsDispatch({
                payload,
                type: 'SETTINGS_SET_CONTENT',
              })
            }
            onGridSizeChange={(payload) =>
              settingsDispatch({
                payload,
                type: 'SETTINGS_SET_GRID_SIZE',
              })
            }
            onShowGridChange={(payload) =>
              settingsDispatch({
                payload,
                type: 'SETTINGS_SET_SHOW_GRID',
              })
            }
            onShowLayoutChange={(payload) =>
              settingsDispatch({
                payload,
                type: 'SETTINGS_SET_SHOW_LAYOUT',
              })
            }
            className={dark}
            settings={settings}
          />
        }
      />
    </ScreenDimensionsProvider>
  );
};

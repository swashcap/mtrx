import React from 'react';

import { Alert } from './alert/Alert';
import { App } from './App';
import { Button } from './controls/Button';
import { CenterLayout } from './layout/CenterLayout';
import { Text } from './text/Text';
import { VStack } from './layout/VStack';
import { reset } from '../state/reset';

export interface RootState {
  hasError: boolean;
}

/**
 * {@link https://reactjs.org/docs/error-boundaries.html}
 */
export class Root extends React.Component<any, RootState> {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    console.error(error);

    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <CenterLayout box={{ pa: 3 }}>
          <Alert
            style={{
              maxWidth: '32em',
            }}
          >
            <VStack
              gap={2}
              style={{
                alignItems: 'center',
              }}
            >
              <Text>An unrecoverable error occurred.</Text>
              <Button onClick={reset}>Reset</Button>
            </VStack>
          </Alert>
        </CenterLayout>
      );
    }

    return <App />;
  }
}

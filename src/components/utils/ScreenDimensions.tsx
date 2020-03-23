import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ScreenDimensions {
  height: number;
  width: number;
}

const INITIAL_DIMENSIONS: ScreenDimensions = {
  height: window.innerHeight,
  width: window.innerWidth,
} as const;

export const ScreenDimensionsContext = createContext<ScreenDimensions>(
  INITIAL_DIMENSIONS
);

export const useScreenDimensions = () => useContext(ScreenDimensionsContext);

export const ScreenDimensionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>(
    INITIAL_DIMENSIONS
  );

  const handleResize = () =>
    setScreenDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenDimensionsContext.Provider value={screenDimensions}>
      {children}
    </ScreenDimensionsContext.Provider>
  );
};

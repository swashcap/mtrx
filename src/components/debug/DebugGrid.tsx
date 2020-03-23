import { styled } from 'linaria/react';

export interface DebugGridProps extends React.HTMLAttributes<HTMLDivElement> {
  grid: number;
}

export const DebugGrid = styled.div<DebugGridProps>`
  background-image: linear-gradient(
      0deg,
      rgba(255, 0, 0) 0,
      rgba(255, 0, 0, 0) 1px
    ),
    linear-gradient(90deg, rgba(255, 0, 0) 0, rgba(255, 0, 0, 0) 1px);
  background-size: ${props => props.grid}px ${props => props.grid}px;
  background-position: 0 1px;
  height: 100%;
  left: 0;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 100%;
`;

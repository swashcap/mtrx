import { styled } from 'linaria/react';

export interface ContentGridProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter: number;
}

export const ContentGrid = styled.div<ContentGridProps>`

  display: flex;
  flex-wrap: wrap;
  margin-left: ${(props) => props.gutter / -2}px;
  margin-right: ${(props) => props.gutter / -2}px;
`;

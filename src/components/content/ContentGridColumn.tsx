import { styled } from 'linaria/react';

interface ContentGridColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: number;
  gutter: number;
}

export const ContentGridColumn = styled.div<ContentGridColumnProps>`

  padding-left: ${(props) => props.gutter / 2}px;
  padding-right: ${(props) => props.gutter / 2}px;
  width: ${(props) => (props.columns / 12) * 100}%;
`;

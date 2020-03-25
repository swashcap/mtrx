import { styled } from 'linaria/react';

export interface ContentContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  margin: number;
}

export const ContentContainer = styled.div<ContentContainerProps>`

  margin-left: ${(props) => props.margin}px;
  margin-right: ${(props) => props.margin}px;
`;

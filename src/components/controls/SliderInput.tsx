import { styled } from 'linaria/react';

export const SliderInput = styled.input`
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
  flex: 2;
  margin: 0;
  width: 100%;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 100%;
    background: var(--color-text);
    height: 1rem;
    margin-top: calc(-0.5rem + 1px);
    width: 1rem;
  }
  &:focus::-webkit-slider-thumb,
  &:hover::-webkit-slider-thumb {
    background: var(--color-focus);
  }
  &:active::-webkit-slider-thumb {
    background: var(--color-active);
  }

  &::-webkit-slider-runnable-track {
    background: var(--color-input-background);
    border-radius: var(--border-radius);
    height: 2px;
  }
`;

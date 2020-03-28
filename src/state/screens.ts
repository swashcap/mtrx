export interface Screen {
  height: number;
  name: string;
  width: number;
}

export type ScreensState = Screen[];

export const screens: ScreensState = [
  {
    height: 568,
    name: 'iPhone SE',
    width: 320,
  },
  {
    height: 640,
    name: 'Galaxy S7',
    width: 360,
  },
  {
    height: 667,
    name: 'iPhone 8',
    width: 375,
  },
  {
    height: 896,
    name: 'iPhone 11, Galaxy S10',
    width: 414,
  },
  {
    height: 960,
    name: 'Galaxy S10+',
    width: 540,
  },
  {
    height: 1110,
    name: 'Pixel 3a',
    width: 540,
  },
  {
    height: 960,
    name: 'Nexus 7',
    width: 600,
  },
  {
    height: 1024,
    name: 'iPad',
    width: 768,
  },
  {
    height: 1280,
    name: 'Galaxy Tab 6',
    width: 800,
  },
];

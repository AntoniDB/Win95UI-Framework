/** Windows 95 base palette. Values map 1:1 to CSS custom properties (--w95-*). */
export const colors = {
  silver: '#C0C0C0',
  white: '#FFFFFF',
  black: '#000000',
  navy: '#000080',
  navyLight: '#1084D0',
  gray: '#808080',
  darkGray: '#404040',
  buttonFace: '#DFDFDF',
  buttonHighlight: '#FFFFFF',
  buttonShadow: '#808080',
  buttonDarkShadow: '#000000',
  buttonLight: '#DFDFDF',
  inset: '#000000',
  highlight: '#000080',
  highlightText: '#FFFFFF',
  desktop: '#008080',
  tooltipBg: '#FFFFE1',
} as const;

export type Win95Colors = typeof colors;
export type Win95ColorName = keyof Win95Colors;

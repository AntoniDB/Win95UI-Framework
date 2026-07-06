export const typography = {
  fontFamily:
    '"Pixelated MS Sans Serif", "MS Sans Serif", "Tahoma", Arial, sans-serif',
  fontSize: {
    sm: '11px',
    md: '13px',
    lg: '16px',
  },
  fontWeight: { normal: 400, bold: 700 },
} as const;

export type Win95Typography = typeof typography;

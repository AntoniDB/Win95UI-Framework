/** Windows 95 base palette. Values map 1:1 to CSS custom properties (--w95-*). */
export declare const colors: {
    readonly silver: "#C0C0C0";
    readonly white: "#FFFFFF";
    readonly black: "#000000";
    readonly navy: "#000080";
    readonly navyLight: "#1084D0";
    readonly gray: "#808080";
    readonly darkGray: "#404040";
    readonly buttonFace: "#DFDFDF";
    readonly buttonHighlight: "#FFFFFF";
    readonly buttonShadow: "#808080";
    readonly buttonDarkShadow: "#000000";
    readonly buttonLight: "#DFDFDF";
    readonly inset: "#000000";
    readonly highlight: "#000080";
    readonly highlightText: "#FFFFFF";
    readonly desktop: "#008080";
    readonly tooltipBg: "#FFFFE1";
};
export type Win95Colors = typeof colors;
export type Win95ColorName = keyof Win95Colors;

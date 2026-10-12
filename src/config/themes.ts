/**
 * Colour themes. Each theme sets the base palette tokens from `styles/base.css`;
 * every other colour on the card (envelope, seal, gift box, footer, shadows) is derived
 * from these with color-mix(), so adding a theme only means adding an entry here.
 */

export type Palette = {
  ivory: string;
  paper: string;
  blush: string;
  rose: string;
  roseDeep: string;
  wine: string;
  gold: string;
  ink: string;
  muted: string;
};

export type Theme = {
  label: string;
  colors: Palette;
  /** Falling petal tints (each fades to white). */
  petals: [string, string, string, string];
};

export const themes = {
  "hong-kem": {
    label: "Hồng kem",
    colors: {
      ivory: "#fbf5ee", paper: "#fffaf5", blush: "#f6e1dc", rose: "#d98b9b", roseDeep: "#b75a6e",
      wine: "#6e2a3a", gold: "#c7a05a", ink: "#3d2b2f", muted: "#86706f",
    },
    petals: ["#f4b6c2", "#f8d3da", "#e89aab", "#fbe4d0"],
  },
  "xanh-la-trang": {
    label: "Xanh lá trắng",
    colors: {
      ivory: "#f6faf5", paper: "#ffffff", blush: "#e2eee1", rose: "#8db898", roseDeep: "#4c8a5f",
      wine: "#2c5a40", gold: "#b89a5a", ink: "#25342b", muted: "#6b7c70",
    },
    petals: ["#cde6d1", "#e9f4ea", "#a6cdb0", "#fffdf4"],
  },
  "do-kem": {
    label: "Đỏ kem",
    colors: {
      ivory: "#f8efe2", paper: "#fffaf0", blush: "#f2dcc5", rose: "#cc6a5e", roseDeep: "#a8322d",
      wine: "#7a1a1d", gold: "#c39a4f", ink: "#3e2620", muted: "#8a6f62",
    },
    petals: ["#e7897f", "#f3c9b6", "#d65a52", "#f7e6cc"],
  },
  "do-trang": {
    label: "Đỏ trắng",
    colors: {
      ivory: "#fdfafa", paper: "#ffffff", blush: "#f8e3e3", rose: "#e0626a", roseDeep: "#c4161c",
      wine: "#8e0e14", gold: "#c9a24a", ink: "#2e1d1e", muted: "#7f6a6b",
    },
    petals: ["#e8505b", "#f4a3aa", "#c4161c", "#fde3e5"],
  },
  "hong-trang": {
    label: "Hồng trắng",
    colors: {
      ivory: "#fff8fa", paper: "#ffffff", blush: "#fde6ee", rose: "#ef98b4", roseDeep: "#dc5d88",
      wine: "#a33862", gold: "#d4b07a", ink: "#3f2a33", muted: "#8c7480",
    },
    petals: ["#f9c4d5", "#fde0ea", "#f4a6c0", "#ffffff"],
  },
  "hong-do": {
    label: "Hồng đỏ",
    colors: {
      ivory: "#fff4f5", paper: "#fffafb", blush: "#fbd9df", rose: "#ef6f8a", roseDeep: "#d6334f",
      wine: "#9b1b30", gold: "#d1a256", ink: "#3b1f26", muted: "#8b6870",
    },
    petals: ["#f58ca0", "#fbc1cc", "#e0405e", "#ffe3e8"],
  },
  "xanh-navy": {
    label: "Xanh navy",
    colors: {
      ivory: "#f6f8fb", paper: "#ffffff", blush: "#e2e8f2", rose: "#8fa6c8", roseDeep: "#3f5f8f",
      wine: "#1f3358", gold: "#c2a15e", ink: "#1e2738", muted: "#6b7689",
    },
    petals: ["#c9d6ea", "#e8eef7", "#a8bbd9", "#fffaf0"],
  },
  "tim-lavender": {
    label: "Tím lavender",
    colors: {
      ivory: "#faf7fc", paper: "#ffffff", blush: "#ece3f4", rose: "#b39ad0", roseDeep: "#8a63b3",
      wine: "#553a7a", gold: "#c9a86a", ink: "#2f2638", muted: "#7e7189",
    },
    petals: ["#d9c8ee", "#efe6f8", "#c3a9e2", "#fff7fb"],
  },
} satisfies Record<string, Theme>;

export type ThemeId = keyof typeof themes;

export const isThemeId = (id: string | null | undefined): id is ThemeId => !!id && Object.hasOwn(themes, id);

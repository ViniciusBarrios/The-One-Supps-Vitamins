import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: {
    "bq-900": "(max-width: 900px)",
    "bq-800": "(max-width: 800px)",
    "bq-700": "(max-width: 700px)",
    "bq-600": "(max-width: 600px)",
    "bq-450": "(max-width: 450px)",
  },

  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});

type StitchesCssType = Stitches.CSS<typeof config>;

export type { StitchesCssType };

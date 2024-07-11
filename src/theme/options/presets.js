// @mui
import { alpha } from "@mui/material/styles";
// theme
import { palette as themePalette } from "../palette";

// ----------------------------------------------------------------------

export function presets(presetsColor) {
  const primary = primaryPresets.find((i) => i.name === presetsColor);

  const theme = {
    palette: {
      primary,
    },
    customShadows: {
      primary: `0 8px 16px 0 ${alpha(`${primary?.main}`, 0.24)}`,
    },
  };

  return theme;
}

// ----------------------------------------------------------------------

const palette = themePalette("light");

export const primaryPresets = [
  // DEFAULT
  {
    name: "default",
    ...palette.primary,
  },
  // CYAN
  {
    name: "cyan",
    lighter: "#CCF4FE",
    light: "#68CDF9",
    main: "#078DEE",
    dark: "#0351AB",
    darker: "#012972",
    contrastText: "#FFFFFF",
  },
  // PURPLE
  {
    name: "purple",
    lighter: "#EBD6FD",
    light: "#B985F4",
    main: "#7635dc",
    dark: "#431A9E",
    darker: "#200A69",
    contrastText: "#FFFFFF",
  },
  // BLUE
  {
    name: "blue",
    lighter: "#D1E9FC",
    light: "#76B0F1",
    main: "#2065D1",
    dark: "#103996",
    darker: "#061B64",
    contrastText: "#FFFFFF",
  },
  // ORANGE
  {
    name: "orange",
    lighter: "#F8E89840",
    light: "#FFBD59",
    main: "#FDAF19",
    dark: "#B77615",
    darker: "#B77615",
    contrastText: "#ffffff",
  },
  // RED
  {
    name: "red",
    lighter: "#ff0066",
    light: "#d80056",
    main: "#a30041",
    dark: "#890037",
    darker: "#3b0017",
    contrastText: "#FFFFFF",
  },
];

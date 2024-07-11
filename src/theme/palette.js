import { alpha } from "@mui/material/styles";

// ---------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  250: "#00000012",
  300: "#DFE3E8",
  350: "#F2F3F5",
  400: "#C4CDD5",
  450: "#ffffff33",
  500: "#919EAB",
  600: "#637381",
  700: "#F6F9FC",
  800: "#212B36",
  900: "#343A40",
};

const PRIMARY = {
  lighter: "#FDAF19",
  light: "#FDAF19",
  main: "#080808",
  dark: "#F47306",
  darker: "#F47306",
  contrastText: "#FFFFFF",
  lightYellow: "#FEF9F4",
};

const SECONDARY = {
  lighter: "#EFD6FF",
  light: "#C684FF",
  main: "#FDAF19",
  dark: "#5119B7",
  darker: "#27097A",
  contrastText: "#FFFFFF",
};

const INFO = {
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF",
};

const SUCCESS = {
  lighter: "#D3FCD2",
  light: "#77ED8B",
  main: "#22C55E",
  dark: "#118D57",
  darker: "#065E49",
  contrastText: "#ffffff",
  100: "rgba(55, 170, 85, 0.10)",
};

const WARNING = {
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
  lightRed: "#F00",
};

const COMMON = {
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const neutral = {
  main: "rgba(86, 106, 127, 0.1)",
  100: "rgba(60, 81, 134, 0.5)",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

export function palette(mode) {
  const light = {
    ...COMMON,
    mode: "light",
    neutral,
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: {
      grey: "#F1F1F1",
      paper: "#FFFFFF",
      default: "#FFFFFF",
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: "dark",
    text: {
      primary: "#FFFFFF",
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      grey: "#F1F1F1",
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.12),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return mode === "light" ? light : dark;
}

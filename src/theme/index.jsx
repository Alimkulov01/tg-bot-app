import merge from "lodash/merge";
import { useMemo } from "react";
// @mui
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
// locales

// components
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { customShadows } from "./custom-shadows";
import { componentsOverrides } from "./overrides";
// options
import { presets } from "./options/presets";
import { darkMode } from "./options/dark-mode";
import { contrast } from "./options/contrast";

// ----------------------------------------------------------------------

export default function ThemeProvider({ children }) {
  const currentLang = "en";

  const darkModeOption = darkMode("light");

  const presetsOption = presets("orange");

  const contrastOption = contrast(true, "light");

  const baseOption = useMemo(
    () => ({
      palette: palette("light"),
      shadows: shadows("light"),
      customShadows: customShadows("light"),
      typography,
      shape: { borderRadius: 8 },
    }),
    []
  );

  const memoizedValue = useMemo(
    () =>
      merge(
        // Base
        baseOption,
        // Direction: remove if not in use
        // Dark mode: remove if not in use
        darkModeOption,
        // Presets: remove if not in use
        presetsOption,
        // Contrast: remove if not in use
        contrastOption.theme
      ),
    [baseOption, darkModeOption, presetsOption, contrastOption.theme]
  );

  const theme = createTheme(memoizedValue);

  theme.components = componentsOverrides(theme);

  const themeWithLocale = useMemo(
    () => createTheme(theme, currentLang.systemValue),
    [currentLang.systemValue, theme]
  );

  return (
    <MuiThemeProvider theme={themeWithLocale}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

// ----------------------------------------------------------------------

export function cssBaseline(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          fontFamily: "Futura PT Book, Futura PT Light"
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          backgroundColor: theme.palette.background.paper,
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          maxWidth: "100%",
          display: "inline-block",
          verticalAlign: "bottom",
        },
        ".MuiRating-sizeSmall": {
          fontSize: "20px",
        },
        ".right_divider": {
          display: "block",
          paddingRight: "20px",
        },
        ".right_divider::after": {
          content: "''",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          width: "1px",
          height: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 10,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        ul: {
          margin: 0,
          padding: 0,
          listStyle: "none",
        },
      },
    },
  };
}

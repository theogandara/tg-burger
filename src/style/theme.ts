import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      1: "#E9F7EF",
      500: "#27AE60",
      600: "#168821",
    },
    grey: {
      600: "#333333",
      300: "#828282",
      100: "#e0e0e0",
      0: "#f5f5f5",
      900: "#111",
    },
    red: {
      200: "#EB5757",
      800: "#e60000",
    },
    yellow: {
      500: "#ffcd07",
    },
    blue: {
      500: "#155BCB",
    },
    white: {
      0: "#ffffff",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "16px",
    md: "18px",
    lg: "22px",
    xl: "26px",
    "2xl": "30px",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "grey.900",
      },
    },
  },
});

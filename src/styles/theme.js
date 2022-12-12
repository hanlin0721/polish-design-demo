import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  colors: {
    brand: {
      main: "#845B35",
      sub: "",
      bg: "#000000",
    },
  },
  breakpoints: {
    xs: "320px",
    sm: "768px",
    md: "991px",
    lg: "1200px",
    xl: "1300px",
    "2xl": "1536px",
  }
});

export default theme;

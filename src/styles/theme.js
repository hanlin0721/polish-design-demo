import { extendTheme } from "@chakra-ui/react";
import { checkboxTheme } from "../theme/components/Checkbox.js"
import { selectTheme } from "../theme/components/Select.js"

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
  },
  components: {
    Checkbox: checkboxTheme,
    Select: selectTheme
  }
});

export default theme;

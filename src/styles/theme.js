import { extendTheme } from "@chakra-ui/react";
import { checkboxTheme } from "../theme/components/Checkbox.js"
import { selectTheme } from "../theme/components/Select.js"

const theme = extendTheme({
  colors: {
    brand: {
      main: "#EDF6FF",
      sub: "#212932",
    },
    blue: {
      50: "#EDF6FF",
      80: "#C8D1D6",
      300: "#7B7F85",
      600: "#383F47",
      700: "#303C4A",
      800: "#2A313A",
      900: "#212932"
    }
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

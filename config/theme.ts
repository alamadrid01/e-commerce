import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#19192B",
      white: "#ffffff",
    },
    primary: {
      light: "rgba(238, 221, 204, 1)",
      main: "rgba(52, 37, 31, 1)",
      dark: "rgba(52, 37, 31, 1)",
      contrastText: "#212121",
    },
    secondary: {
      light: "#03296F7A",
      main: "#6D6D6D",
      dark: "#101010",
      contrastText: "#757575",
    },
    background: {
      default: "#fff",
    },
    text: {
      secondary: "rgba(52, 37, 31, 1)",
      primary: "rgba(52, 37, 31, 1)",
      disabled: "#757575",
    },
    // card: {
    //   first: "#FF0000",
    //   second: "#0652DD",
    //   third: "#FFB800",
    //   fourth: "#00FF91",
    // },
    grey: {
      "100": "rgba(156, 182, 187, 0.329)",
      "200": "rgba(156, 182, 187, 0.486)",
      "300": "rgba(238, 221, 204, 1)",
      "400": "#6D6D6D",
      "500": "#434343",
      "600": "#353535",
      "700": "#282828",
      "800": "#101010",
    },
    info: {
      main: "#1bb2f1",
      light: "#CDDCF8",
    },
    success: {
      light: "#E5FCF6",
      main: "#0FB56D",
      dark: "#26704C",
    },
    error: {
      main: "#FF2635",
      light: "#FFD8D6",
      dark: "#A81414",
    },
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
});

export default theme;

import { createStyledBreakpointsTheme } from "styled-breakpoints";

const theme = {
  colors: {
    primary: "#0070f3",
    black: "#000",
    white: "#fff",
    gray: "#e0e0e0",
  },
  fonts: {
    body: "arial, sans-serif",
    heading: "arial, sans-serif",
  },
  containerWidth: "1440",
  ...createStyledBreakpointsTheme(),
};

export default theme;

import { globalCss } from "stitches";

export default globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  "*, button, input, textarea": {
    border: "none",
    background: "none",
    outline: "none",
  },
  button: {
    cursor: "pointer",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    overflowX: "hidden",

    backgroundColor: "#F7F7F7",

    textRendering: "optimizeLegibility !important",
    "-webkit-font-smoothing": "antialiased !important",
  },
});

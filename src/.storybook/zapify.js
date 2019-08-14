import { create } from "@storybook/theming";

export default create({
  base: "light",
  colorPrimary: "#FF6F61",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "grey",
  appBorderRadius: 50,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "#FF6F61",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 50,

  brandTitle: "Zapify-ui",
  brandUrl: "https://zapify.netlify.com",
  brandImage:
    "https://camo.githubusercontent.com/56702c11ebd0c8817ee8d95b1e45022b97083b8a/68747470733a2f2f692e6962622e636f2f5832334e4877362f612e706e67"
});

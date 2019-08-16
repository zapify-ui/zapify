import { addParameters, configure, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { themes } from "@storybook/theming";
import zapify from "./zapify";

setAddon(JSXAddon);
const req = require.context("../stories", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Option defaults:
addParameters({
  options: {
    name: "Zapify-ui",
    title: "Zapify-ui",
    theme: zapify
  }
});

configure(loadStories, module);

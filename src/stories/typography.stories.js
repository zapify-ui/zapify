/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../components/Typography";

storiesOf("Typography", module)
  .addWithJSX("with default Props", () => (
    <Typography>With Default Props</Typography>
  ))
  .addWithJSX("with h1", () => (
    <Typography variant="h1" color="black">
      with h1
    </Typography>
  ))
  .addWithJSX("with h2", () => (
    <Typography variant="h2" color="black">
      with h2
    </Typography>
  ))
  .addWithJSX("with h3", () => (
    <Typography variant="h3" color="black">
      with h3
    </Typography>
  ))
  .addWithJSX("with h4", () => (
    <Typography variant="h4" color="black">
      with h4
    </Typography>
  ))
  .addWithJSX("with h5", () => (
    <Typography variant="h5" color="black">
      with h5
    </Typography>
  ))
  .addWithJSX("with custom color", () => (
    <Typography variant="h2" color="red">
      with h2 and custom color prop
    </Typography>
  ));

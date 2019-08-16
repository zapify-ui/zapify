/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TextField from "../components/TextField";

storiesOf("TextField", module)
  .addDecorator(withInfo)
  .addWithJSX("Input Hook with custom placeholder", () => (
    <TextField placeholderText="PlaceHolder Customized">
      Input Hook with custom placeholder
    </TextField>
  ))
  .addWithJSX("Input Hook with custom color", () => (
    <TextField placeholderText="Color Customized" color="silver">
      Input Hook with custom placeholder
    </TextField>
  ))
  .addWithJSX("Input Hook with custom backgroundColor", () => (
    <TextField
      placeholderText="Color Customized"
      color="white"
      backgroundColor="teal"
    >
      Input Hook with custom placeholder
    </TextField>
  ));

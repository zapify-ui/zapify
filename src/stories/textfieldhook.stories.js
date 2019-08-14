/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import TextFieldHook from "../components/TextFieldHook";

storiesOf("TextFieldHook", module)
  .addWithJSX("Input Hook with custom placeholder", () => (
    <TextFieldHook placeholderText="PlaceHolder Customized">
      Input Hook with custom placeholder
    </TextFieldHook>
  ))
  .addWithJSX("Input Hook with custom color", () => (
    <TextFieldHook placeholderText="Color Customized" color="silver">
      Input Hook with custom placeholder
    </TextFieldHook>
  ));

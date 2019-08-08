/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import TextFieldHook from "../components/TextFieldHook";

storiesOf("TextFieldHook", module)
  .add("With label", () => <TextFieldHook >Hello</TextFieldHook>);
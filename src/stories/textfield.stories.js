/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import TextField from "../components/TextField";

storiesOf("TextField", module).add("With label", () => (
  <TextField>Hello</TextField>
));

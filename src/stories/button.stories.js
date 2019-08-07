/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

storiesOf("Button", module).add("with color props", () => (
  <Button onClick={action("button-click")} color="primaryButton">
    Hello
  </Button>
));

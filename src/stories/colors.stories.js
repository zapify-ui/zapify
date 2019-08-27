/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Colors from "../components/Colors";
import { Typography } from "../components";

storiesOf("Colors", module).addWithJSX("Color and Gradient Pallete", () => (
  <div>
    <Typography variant="h1" color="black">
      Colors
    </Typography>{" "}
    <Colors />
  </div>
));

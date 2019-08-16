/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { Typography } from "../components";

storiesOf("Components", module)
  .addJSX("All", () => (
    <Typography variant="h1">All Components Will be updated soon!</Typography>
  ))
  .addJSX("Default Theme", () => (
    <Typography variant="h1">All Components Will be updated soon!</Typography>
  ));

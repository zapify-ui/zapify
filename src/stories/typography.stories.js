/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "../components/Typography";

storiesOf("Typography", module)
  .add("with h1", () => <Typography variant="h1">Hello</Typography>)
  .add("Without h1", () => <Typography>Hello</Typography>);

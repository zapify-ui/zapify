/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "../components/Grid";

storiesOf("Grid", module).add("with h1", () => (
  <div>
    <Grid nBox={4} m={3}></Grid>
    <Grid nBox={3} m={3}></Grid>
    <Grid nBox={2} m={3}></Grid>
  </div>
));

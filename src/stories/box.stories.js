/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../components/Box";

storiesOf("Box", module).add("color padding and margin", () => (
  <Box color="Primary" p={2} m={2.5}>
    this is Box
  </Box>
));

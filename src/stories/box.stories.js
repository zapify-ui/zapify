/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../components/Box";

storiesOf("Box", module).add("color padding and margin", () => (
  <div>
    <Box color="Primary" p={2} m={2.5}></Box>
    <Box color="Secondary" p={2} m={2.5}></Box>
    <Box color="dark" p={2} m={2.5} />
    <Box color="darkPrimary" p={2} m={2.5} />
    <Box color="darkSecondary" p={2} m={2.5} />
    <Box color="disabled" p={2} m={2.5} />
  </div>
));

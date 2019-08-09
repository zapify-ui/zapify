/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../components/Box";

storiesOf("Box", module)
  .add("color padding and margin", () => (
    <div>
      <Box color="Primary" textColor="black" p={2} m={2.5} />
      <Box color="Secondary" textColor="white" p={2} m={2.5} />
      <Box color="dark" textColor="white" p={2} m={2.5} />
      <Box color="darkPrimary" textColor="white" p={2} m={2.5} />
      <Box color="darkSecondary" textColor="white" p={2} m={2.5} />
      <Box color="disabled" textColor="black" p={2} m={2.5} />
    </div>
  ))
  .add("User Custamisation", () => <div></div>);

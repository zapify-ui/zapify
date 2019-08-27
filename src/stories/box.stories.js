/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "../components/Box";
import Typography from "../components/Typography";

storiesOf("Box", module)
  .addWithJSX("With Default Props", () => (
    <div>
      <center>
        <Typography variant="h1" color="black">
          Default Props
        </Typography>
      </center>{" "}
      <Box />
    </div>
  ))
  .addWithJSX("color primary", () => (
    <div>
      <center>
        <Typography>color primary</Typography>
      </center>{" "}
      <Box color="primary" />
    </div>
  ));

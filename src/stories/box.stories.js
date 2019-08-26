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
  ))
  .addWithJSX("Color Blue ", () => (
    <div>
      <center>
        <Typography>Color Blue </Typography>
      </center>{" "}
      <Box color="Secondary" />
    </div>
  ))
  .addWithJSX("Color Pink ", () => (
    <div>
      <center>
        <Typography>Color Pink </Typography>
      </center>{" "}
      <Box color="Tertiary" />
    </div>
  ))
  .addWithJSX("Color DarkPrimary", () => (
    <div>
      <center>
        <Typography>Color DarkPrimary</Typography>
      </center>{" "}
      <Box color="darkPrimary" />
    </div>
  ))
  .addWithJSX("Color DarkSecondary", () => (
    <div>
      <center>
        <Typography>Color DarkSecondary</Typography>
      </center>{" "}
      <Box color="darkSecondary" />
    </div>
  ))
  .addWithJSX("Color Disabled", () => (
    <div>
      <center>
        <Typography>Color Disabled</Typography>
      </center>{" "}
      <Box color="disabled" />
    </div>
  ));

/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Box from "../components/Box";
import Typography from "../components/Typography";

storiesOf("Box", module)
  .addWithJSX("color primary", () => (
    <div>
      <center>
        <Typography>color primary</Typography>
      </center>{" "}
      <Box color="Primary" textColor="black" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color Blue ", () => (
    <div>
      <center>
        <Typography>Color Blue </Typography>
      </center>{" "}
      <Box color="Secondary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color Pink ", () => (
    <div>
      <center>
        <Typography>Color Pink </Typography>
      </center>{" "}
      <Box color="Tertiary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color DarkPrimary", () => (
    <div>
      <center>
        <Typography>Color DarkPrimary</Typography>
      </center>{" "}
      <Box color="darkPrimary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color DarkSecondary", () => (
    <div>
      <center>
        <Typography>Color DarkSecondary</Typography>
      </center>{" "}
      <Box color="darkSecondary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color Disabled", () => (
    <div>
      <center>
        <Typography>Color Disabled</Typography>
      </center>{" "}
      <Box color="disabled" textColor="black" p={2} m={2.5} />
    </div>
  ));

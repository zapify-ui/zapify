/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Box from "../components/Box";
import Typography from "../components/Typography";

storiesOf("Box", module)
  .addWithJSX("color primary Text Color black", () => (
    <div>
      <center>
        <Typography>color primary Text Color black</Typography>
      </center>{" "}
      <Box color="Primary" textColor="black" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color Secondary Text color White", () => (
    <div>
      <center>
        <Typography>Color Secondary Text color White</Typography>
      </center>{" "}
      <Box color="Secondary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color Dark Text color white", () => (
    <div>
      <center>
        <Typography>Color Dark Text color white</Typography>
      </center>{" "}
      <Box color="dark" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color DarkPrimary with textColor White", () => (
    <div>
      <center>
        <Typography>Color DarkPrimary with textColor White</Typography>
      </center>{" "}
      <Box color="darkPrimary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color DarkSecondary with textColor White", () => (
    <div>
      <center>
        <Typography>Color DarkSecondary with textColor White</Typography>
      </center>{" "}
      <Box color="darkSecondary" textColor="white" p={2} m={2.5} />
    </div>
  ))
  .addWithJSX("Color Disabled with textColor Black", () => (
    <div>
      <center>
        <Typography>Color Disabled with textColor Black</Typography>
      </center>{" "}
      <Box color="disabled" textColor="black" p={2} m={2.5} />
    </div>
  ));

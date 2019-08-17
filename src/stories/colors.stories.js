/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { COLORS } from "../styles/ColorSchema";

storiesOf("Colors", module).addWithJSX("Pallete", () => (
  <center>
    <div
      style={{
        backgroundColor: COLORS.black,
        maxWidth: "190px",
        color: COLORS.white,
        borderRadius: 10,
        height: "70px",
        textAlign: "center",
        padding: "1em 1em 1em 1em",
        margin: "1em 1em 1em 1em",
        borderStyle: "solid",
        borderColor: COLORS.white
      }}
    >
      Black Color
    </div>
    <div
      style={{
        backgroundColor: COLORS.black,
        maxWidth: "190px",
        color: COLORS.white,
        borderRadius: 10,
        height: "70px",
        textAlign: "center",
        padding: "1em 1em 1em 1em",
        borderStyle: "solid",
        margin: "1em 1em 1em 1em",
        borderColor: COLORS.white
      }}
    >
      Black Color
    </div>
  </center>
));

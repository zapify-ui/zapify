/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import ZapButton from "../components/ZapButton";
import Typography from "../components/Typography";

const borderColors = [
  "blackBorderButton",
  "purpleBorderButton",
  "orangeBorderButton",
  "blueBorderButton",
  "yellowBorderButton",
  "redBorderButton"
];
const gradColors = [
  "funkgradientButton1",
  "funkgradientButton2",
  "funkgradientButton3",
  "funkgradientButton4",
  "funkgradientButton5",
  "funkgradientButton6"
];
storiesOf("ZapButton", module)
  .addWithJSX("This is of variant-> paperButton", () => (
    <div>
      <center>
        <Typography>paperButton</Typography>
      </center>
      <ZapButton variant="paperButton">Zap Button</ZapButton>
    </div>
  ))
  .addWithJSX("This is of variant-> funkgradientButton<number>", () => (
    <div>
      <center>
        <Typography>funkgradientButtons</Typography>
      </center>
      {gradColors.map(function(colors) {
        return <ZapButton variant={colors}>Zap Button</ZapButton>;
      })}
    </div>
  ))
  .addWithJSX("This is of variant-> darkgradientButton", () => (
    <div>
      <center>
        <Typography>darkgradientButton</Typography>
      </center>
      <ZapButton variant="darkgradientButton">Zap Button</ZapButton>
    </div>
  ))
  .addWithJSX("This is of variant-> <color>BorderButton", () => (
    <div>
      <center>
        <Typography>BorderButtons</Typography>
      </center>
      {borderColors.map(function(colors) {
        return <ZapButton variant={colors}>Zap Button</ZapButton>;
      })}
    </div>
  ));

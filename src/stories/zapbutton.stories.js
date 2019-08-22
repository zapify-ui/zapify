/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ZapButton from "../components/ZapButton";
import Typography from "../components/Typography";

storiesOf("ZapButton", module)
.addWithJSX("This is of variant-> paperButton", () => (
  <div>
       <center>
          <Typography>paperButton</Typography>
       </center>
          <ZapButton variant="paperButton">Zap Button</ZapButton>
  </div>
))
.addWithJSX("This is of variant-> funkgradientButton", () => (
    <div>
         <center>
            <Typography>funkgradientButton</Typography>
         </center>
            <ZapButton variant="funkgradientButton">Zap Button</ZapButton>
            <ZapButton variant="funkgradientButton">Zap Button</ZapButton>
            <ZapButton variant="funkgradientButton">Zap Button</ZapButton>
    </div>
  ))
.addWithJSX("This is of variant-> darkgradientButton", () => (
    <div>
         <center>
            <Typography>darkgradientButton</Typography>
         </center>
            <ZapButton variant="darkgradientButton">Zap Button</ZapButton>
    </div>
  ));

/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";

import ZapBar from "../components/ZapBar";

storiesOf("ZapBar", module)
  .add("With Default Props", () => <ZapBar />)
  .add("With User Customisation", () => <div></div>);

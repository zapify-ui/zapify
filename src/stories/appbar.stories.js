/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";

import AppBar from "../components/AppBar";

storiesOf("AppBar", module).add("N number of Links", () => (
  <AppBar numberOfLinks="4" />
));

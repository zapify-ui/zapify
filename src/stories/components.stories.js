/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Components", module)
  .addWithJSX("All", () => (
    <center>
      <h1>All Components</h1>
    </center>
  ))
  .addWithJSX("Default theme", () => (
    <center>
      <h1>Default theme</h1>
    </center>
  ));

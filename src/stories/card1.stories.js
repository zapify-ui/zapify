/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Card1 from "../components/Card1/index";

storiesOf("Card1", module)
  .addDecorator(withInfo)
  .addWithJSX("Card", () => (
       <Card1 />
 ));
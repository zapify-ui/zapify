/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Card from "../components/Card";

storiesOf("Card", module)
  .addDecorator(withInfo)
  .addWithJSX("Card", () => (
       <Card />
 ));
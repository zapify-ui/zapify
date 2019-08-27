/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "../components/Card";

storiesOf("Card", module)
  .addWithJSX("Card with default Props", () => <Card />)
  .addWithJSX("Card with custom props", () => (
    <Card buttonText="buttonText" titleText="title">
      Contents will be here!
    </Card>
  ));

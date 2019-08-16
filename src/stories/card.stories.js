/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Card from "../components/Card";

storiesOf("Card", module).addWithJSX("Card", () => <Card />);

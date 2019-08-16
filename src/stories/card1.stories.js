/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import Card1 from "../components/Card1/index";

storiesOf("Card1", module).addWithJSX("Card", () => <Card1 />);

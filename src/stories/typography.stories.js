/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Typography from "../components/Typography";

storiesOf("Typography", module)
  .addDecorator(withInfo)
  .addWithJSX("with default Props", () => <Typography />)
  .addWithJSX("with h1", () => <Typography variant="h1">Hello</Typography>)
  .addWithJSX("with h2", () => <Typography variant="h2">Hello</Typography>)
  .addWithJSX("with h3", () => <Typography variant="h3">Hello</Typography>)
  .addWithJSX("with h4", () => <Typography variant="h4">Hello</Typography>)
  .addWithJSX("with h5", () => <Typography variant="h5">Hello</Typography>);

/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Media from "../components/Media";

storiesOf("Media", module).add("with h1", () => <Media typeGet="linear" />);

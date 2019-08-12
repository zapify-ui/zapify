/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Media from "../components/Media";

storiesOf("Media", module)
.addDecorator(withInfo)
.addWithJSX("with h1", () => (
    <div>
        <Media typeGet="nested">hello world</Media>
        <Media typeGet="linear">hello world</Media>
    </div>
));


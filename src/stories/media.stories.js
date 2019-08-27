/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Media from "../components/Media";

storiesOf("Media", module).addWithJSX("with h1", () => (
  <div>
    <Media
      nestedHeading="heading"
      typeGet="linear"
      image="https://tinyurl.com/yylsuh97"
    >
      hello
    </Media>
  </div>
));

/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Media from "../components/Media";

storiesOf("Media", module)
.addDecorator(withInfo)
.addWithJSX("with h1", () => (
    <div>
        <Media 
          typeGet="linear"
          image="https://tinyurl.com/yylsuh97"
        >
            Contrary to popular belief, 
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
            literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literatur.
        </Media>
        <Media 
          typeGet="nested"
          image="https://tinyurl.com/yylsuh97"
          >
          </Media>
    </div>
));


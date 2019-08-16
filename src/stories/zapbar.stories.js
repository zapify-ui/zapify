/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import ZapBar from "../components/ZapBar";

storiesOf("ZapBar", module)
  .addWithJSX("With Default Props", () => <ZapBar />)
  .addWithJSX("With User Customisation", () => (
    <ZapBar
      color="#f0f0f0"
      linkColor="#692478"
      links={[
        { name: "Custom Link 1", url: "www.piyushmehta.com" },
        { name: "Custom Link 2", url: "www.piyushmehta.com" }
      ]}
      logoColor="#be1e6b"
      title="Brand Name"
    />
  ));

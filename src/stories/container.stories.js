/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Container from "../components/Container";

storiesOf("Container", module).add("fluid", () => (
  <div>
    {" "}
    <Container type="fluid" maxWidth="sm">
      {" "}
    </Container>
    <Container type="fluid" maxWidth="md">
      {" "}
    </Container>
    <Container type="fluid" maxWidth="xl">
      {" "}
    </Container>
  </div>
));

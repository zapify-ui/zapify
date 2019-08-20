/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ZapButton from "../components/ZapButton";

storiesOf("ZapButton", module)
.addWithJSX("with color props", () => (
//   <ZapButton onClick={action("button-click")} color="primaryButton">
//     Hello
//   </ZapButton>
<ZapButton />
));

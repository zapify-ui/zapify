/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ZapButton from "../components/ZapButton";

storiesOf("ZapButton", module)
.addWithJSX("primary button", () => (
<ZapButton color="maroon" textColor="white">Zap Button</ZapButton>
));

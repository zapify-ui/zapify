/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ZapButton from "../components/ZapButton";

storiesOf("ZapButton", module)
.addWithJSX("This is of variant paperButton", () => (
<ZapButton variant="paperButton">Zap Button</ZapButton>
));

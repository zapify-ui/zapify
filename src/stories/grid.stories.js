/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import { storiesOf } from "@storybook/react";
import Grid from "../components/Grid";
import InfoCard from "../components/InfoCard/index";
import Box from "../components/Box";

function calculategrid(numrows, text, columns) {
  // eslint-disable-next-line no-plusplus
  const items = [];
  for (let i = 0; i < numrows; i++) {
    items.push(
      <div className={columns}>
        <Box color="Primary" textColor="black">
          {" "}
          {text}
        </Box>
      </div>
    );
  }
  return items;
}

storiesOf("Grid", module)
  .addWithJSX("Grid with 16 Columns ", () => (
    <div>
      <Grid type="grid grid_16">{calculategrid(16, "01", "col col-1")}</Grid>

      <Grid type="grid grid_16">{calculategrid(8, "02", "col col-2")}</Grid>
      <Grid type="grid grid_16">{calculategrid(4, "04", "col col-4")}</Grid>
      <Grid type="grid grid_16">{calculategrid(2, "08", "col col-8")}</Grid>
      <Grid type="grid grid_16">{calculategrid(1, "16", "col col-16")}</Grid>
    </div>
  ))
  .addWithJSX("Grid with 12 Columns", () => (
    <div>
      <Grid type="grid grid_12">{calculategrid(12, "01", "col col-1")}</Grid>
      <Grid type="grid grid_12">{calculategrid(6, "02", "col col-2")}</Grid>
      <Grid type="grid grid_12">{calculategrid(4, "03", "col col-3")}</Grid>

      <Grid type="grid grid_12">{calculategrid(2, "06", "col col-6")}</Grid>
      <Grid type="grid grid_12">{calculategrid(1, "12", "col col-12")}</Grid>
      <Grid type="grid grid_12">
        {calculategrid(1, "09", "col col-9")}
        {calculategrid(1, "03", "col col-3")}
      </Grid>
    </div>
  ))
  .addWithJSX("Grid with 8 Columns", () => (
    <div>
      <Grid type="grid grid_8">{calculategrid(8, "01", "col col-1")}</Grid>
      <Grid type="grid grid_8">{calculategrid(4, "02", "col col-2")}</Grid>
      <Grid type="grid grid_8">{calculategrid(2, "04", "col col-4")}</Grid>
      <Grid type="grid grid_8">{calculategrid(1, "08", "col col-8")}</Grid>
    </div>
  ))
  .addWithJSX("Grid with Card", () => (
    <div>
      <Grid type="grid grid_8">
        <div className="col col-4">
          <InfoCard />
        </div>
        <div className="col col-4">
          <InfoCard />
        </div>
      </Grid>
    </div>
  ));

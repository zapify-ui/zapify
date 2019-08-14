import React from "react";
import renderer from "react-test-renderer";
import Typography from "./index";

test("Container tests", () => {
  const component = renderer.create(
    <Typography variant="h5">Zapify Ui Text</Typography>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Box from "./index";

test("box default test case", () => {
  const component = renderer.create(<Box color="primary" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

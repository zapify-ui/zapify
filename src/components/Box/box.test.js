import React from "react";
import renderer from "react-test-renderer";
import Box from "./index";

test("box default test case", () => {
  const component = renderer.create(<Box color="Primary" p={2} m={2.5} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

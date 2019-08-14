import React from "react";
import renderer from "react-test-renderer";
import Container from "./index";

test("Container tests", () => {
  const component = renderer.create(<Container> </Container>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

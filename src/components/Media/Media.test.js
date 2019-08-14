import React from "react";
import renderer from "react-test-renderer";
import Media from "./index";

test("Media default test case", () => {
  const component = renderer.create(
    <Media typeGet="linear">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy.
    </Media>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

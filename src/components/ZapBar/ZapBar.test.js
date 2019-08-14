import React from "react";
import renderer from "react-test-renderer";
import ZapBar from "./index";

test("Container tests", () => {
  const component = renderer.create(
    <ZapBar
      color="#f0f0f0"
      linkColor="#692478"
      links={[
        {
          name: "Custom Link 1",
          url: "www.piyushmehta.com"
        },
        {
          name: "Custom Link 2",
          url: "www.piyushmehta.com"
        }
      ]}
      logoColor="#be1e6b"
      logoImage="https://camo.githubusercontent.com/56702c11ebd0c8817ee8d95b1e45022b97083b8a/68747470733a2f2f692e6962622e636f2f5832334e4877362f612e706e67"
      logoSize="-2em 0em -0.8em 0.2em"
      title="Brand Name"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Typography from "./index";

test("Container tests", () => {
    const component = renderer.create(
        <Typography><h1>hello</h1></Typography>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

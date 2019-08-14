import React from "react";
import renderer from "react-test-renderer";
import TextField from "./index";

test("Container tests", () => {
    const component = renderer.create(
        <TextField
            backgroundColor="teal"
            color="white"
            placeholderText="Color Customized"
        >
            Input Hook with custom placeholder
        </TextField>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

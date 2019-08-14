import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

test('Button default test case', () => {
    const component = renderer.create(
        <Button color="primaryButton"> Hello </Button>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


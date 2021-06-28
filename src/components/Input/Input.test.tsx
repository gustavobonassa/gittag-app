import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import * as React from "react";

import Input from "./Input";

describe("Input success tests", () => {
  it("renders without crashing", () => {
    const component = renderer.create(
      <Input
        value=""
        onChange={() => ({})}
        autoFocus
      />
    );

    expect(component?.root?.children?.length).toBe(1);
  });
});

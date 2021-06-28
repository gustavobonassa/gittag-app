import renderer from 'react-test-renderer';

import * as React from "react";

import Button from "./Button";

describe("Button success tests", () => {
  it("renders without crashing", () => {
    const component = renderer.create(
      <Button />
    );

    expect(component?.root?.children?.length).toBe(1);
  });

  it("Button click should work", () => {
    let clicked = false;
    const temp = renderer.create(
      <Button onPress={() => { clicked = true; }} />,
    );

    temp.root.props.onPress();
    expect(clicked).toBe(true);
  });

  it("should receive a style as prop", () => {
    const temp = renderer.create(
      <Button
        onPress={() => ({})}
        style={{
          backgroundColor: "red"
        }}
      />,
    );

    expect(temp.root.props.style).toStrictEqual({ backgroundColor: "red" });
  });
});

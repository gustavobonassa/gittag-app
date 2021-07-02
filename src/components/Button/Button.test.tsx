import { mount } from "enzyme";
import * as React from "react";

import Button from "./Button";

describe("Button success tests", () => {
  it("renders without crashing", () => {
    const component = mount(
      <Button />
    );

    expect(component).toHaveLength(1);
  });

  it("should execute onPress function when clicked", () => {
    let clicked = false;
    const component = mount(
      <Button onPress={() => { clicked = true; }} />,
    );
    component.simulate("click");
    expect(clicked).toBe(true);
  });

  it("should render a text as children", () => {
    const component = mount(
      <Button onPress={() => ({})}>
        Hello world
      </Button>,
    );

    expect(component.first().text()).toBe("Hello world");
  });

  it("should receive a text as prop", () => {
    const component = mount(
      <Button
        onPress={() => ({})}
        text="It's me, Mario!"
      />,
    );

    expect(component.first().text()).toBe("It's me, Mario!");
  });

  it("respects style prop", () => {
    const component = mount(
      <Button
        onPress={() => ({})}
        style={{
          backgroundColor: "purple",
        }}
      />,
    );
    const domNode = component.getDOMNode();
    const backgroundDomNode = getComputedStyle(domNode).backgroundColor;
    expect(backgroundDomNode).toBe("purple");
  });

  it("respects loading prop", () => {
    const component = mount(
      <Button
        onPress={() => ({})}
        loading
      />,
    );
    const loadingComp = component.findWhere((node) => node.prop("testID") === "loading-test");

    expect(loadingComp.exists()).toBe(true);
  });
});
